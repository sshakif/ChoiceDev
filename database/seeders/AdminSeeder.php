<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Admin;
use Illuminate\Support\Facades\Hash;


class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $obj = new Admin();
        $obj -> name = 'Admin';
        $obj -> email = 'admin@admin.com';
        $obj -> password = Hash::make('1234');
        $obj -> save();

    }
}
