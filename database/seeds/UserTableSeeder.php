<?php

use Illuminate\Database\Seeder;
use App\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $new = new User;
        $new->name = 'Admin';
        $new->email = 'admin@email.com';
        $new->password = 'admin123';
        $new->save();
    }
}
