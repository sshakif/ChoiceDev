<?php

namespace Database\Seeders;
use App\Models\User;
use Spatie\Permission\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Create a default user
        $user = User::create([
            'name' => 'Admin User',
            'email' => 'admin@admin.com',
            'role' => 'super-admin',
            'password' => Hash::make('1234'),
        ]);

        // Assign the super-admin role to the user
        $superAdminRole = Role::where('name', 'super-admin')->first();
        $user->assignRole($superAdminRole);
    }
}
