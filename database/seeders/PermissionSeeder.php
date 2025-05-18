<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $permissions = [
            'create-users',
            'edit-users',
            'delete-users',
            'create-event',
            'edit-event',
            'delete-event',
            'create-category',
            'edit-category',
            'delete-category',
            'accounting',
            'user-mangement',
            'event-mangement',
            'category-mangement',
            'role-permission',
            'administration-power',
            'user',
            'admin',
        ];

        foreach ($permissions as $permission) {
            Permission::updateOrCreate([
                'name' => $permission,
                'guard_name' => 'web', // Change the guard_name if needed
            ]);
        }

    }
}
