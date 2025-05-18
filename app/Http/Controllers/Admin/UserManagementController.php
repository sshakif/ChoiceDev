<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class UserManagementController extends Controller
{
    //

    public function role(){
        $permissions = Permission::latest()->get();
        $roles = Role::latest()->paginate(6);
        return view('admin.backend.user-management.role-permission.role', [
            'permissions' => $permissions,
            'roles' => $roles
        ]);
    }

    public function assign_role(Request $request)
    {
        $search = $request->input('search');
        $users = User::where('name', 'like', "%$search%")
                     ->orWhere('email', 'like', "%$search%")
                     ->orderBy('id', 'ASC')->paginate(6);

        $roles = Role::all();

        return view('admin.backend.user-management.user-list.user', [
            'users' => $users,
            'roles' => $roles,
        ]);
    }

    public function userStore(Request $request){
        try {
            DB::beginTransaction();

            $validatedData = $request->validate([
                'name' => 'required|string',
                'email' => 'required|string|email',
                'password' => 'required|string|min:4',
            ]);

            $user = User::where('email', $validatedData['email'])->first();

            if ($user) {
                return back()->with('error', 'User with this email already exists.');
            }

            $user = User::create([
                'name' => $validatedData['name'],
                'email' => $validatedData['email'],
                'password' => bcrypt($validatedData['password']),
            ]);

            // $role = Role::where('name', 'user')->first();

            // if ($role) {
            //     $user->assignRole($role);
            // }

            DB::commit();

            return back()->with('success', 'User created successfully.');
        } catch (\Exception $e) {
             DB::rollBack();

             return back()->with('danger', $e->getMessage());
        }
    }

    public function userUpdate(Request $request, $userId){
        try {
            DB::beginTransaction();

            $validatedData = $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|string|email|max:255|unique:users,email,'.$userId,
            ]);

            $user = User::find($userId);
            $user->name = $validatedData['name'];
            $user->email = $validatedData['email'];
            $user->password = $request->input('password') ? bcrypt($request->input('password')) : $user->password;
            $user->save();

            DB::commit();

            return back()->with('success', 'User Updated successfully.');
        }catch (\Exception $e) {
           DB::rollBack();
        }
    }


    function store_role(Request $request)
    {

        $validatedData = $request->validate([
            'role_name' => 'required|unique:roles,name|max:255',
            'permission' => 'required|array',
            'permission.*' => 'exists:permissions,name',
        ]);

        try {
            DB::beginTransaction();

            $role = Role::create([
                'name' => $validatedData['role_name'],
                'guard_name' => 'web',
            ]);

            // Retrieve the selected permissions
            $permissions = Permission::whereIn('name', $validatedData['permission'])->get();

            // Manually sync the permissions of the role
            $role->syncPermissions($permissions);

            DB::commit();

            return back()->with('success', 'Role created successfully.');
        } catch (\Exception $e) {
            // Something went wrong, rollback the transaction
            DB::rollBack();
            // Handle or log the exception
            // ...

            return back()->with('danger', $e->getMessage());
        }
    }


    public function updateRole(Request $request, $roleId)
    {
        $validatedData = $request->validate([
            'role_name' => 'required|unique:roles,name,'.$roleId.'|max:255',
            'permission' => 'required|array',
            'permission.*' => 'exists:permissions,id',
        ]);
        // $validatedData = $request->validate([
        //     'role_name' => 'required|unique:roles,name,'.$roleId.'|max:255',
        //     'permission' => 'required|array',
        //     'permission.*' => 'exists:permissions,name',
        // ]);

        // dd($validatedData);
        $role = Role::findOrFail($roleId);
        $role->name = $validatedData['role_name'];
        $role->save();

        // Sync the permissions of the role
        $permissions = Permission::whereIn('id', $validatedData['permission'])->get();
        $role->syncPermissions($permissions);

        return redirect()->back()->with('success', 'Role updated successfully.');
    }


    public function deleteRole($roleId)
    {
        $role = Role::findOrFail($roleId);
        $role->delete();

        return back()->with('success', 'Role deleted successfully.');
    }


    public function assignRole(Request $request, $userId)
    {
        $validatedData = $request->validate([
            'role' => 'required|exists:roles,name',
        ]);
        $user = User::findOrFail($userId);
        $previousRole = $user->roles()->first(); // Get the previous role assigned to the user

        if ($previousRole) {
            $user->removeRole($previousRole); // Remove the previous role
        }
        $role = Role::where('name', $validatedData['role'])->firstOrFail();

        $user->assignRole($role);

        $user->role =  $request->input('role');
        $user->save();


        return redirect()->back()->with('success', 'Role assigned to user successfully.');
    }
}
