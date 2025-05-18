<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = ['super-admin', 'admin', 'accountant', 'user'];

        foreach ($roles as $roleName) {
            $role = Role::updateOrCreate(
                ['name' => $roleName],
                ['guard_name' => 'web']
            );

            $permissions = Permission::all();

            // Assign all permissions to the 'super-admin' role
            if ($roleName === 'super-admin') {
                $role->syncPermissions($permissions);
            }
        }
    }
}
