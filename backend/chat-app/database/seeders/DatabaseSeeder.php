<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

       
            // Create 4 more users
  User::factory()->create([
                'name' => 'John Doe',
                'username' => 'john',
                'phone' => '25078673386',
                'email' => 'john@gmail.com',
                'password' => bcrypt('john'),
                'status' => 'active',
            ]);
            User::factory()->create([
                'name' => 'Jane Doe',
                'username' => 'jane',
                'phone' => '25071172786',
                'email' => 'jane@gmail.com',
                'password' => bcrypt('jane'),
                'status' => 'active',
            ]);
            User::factory()->create([
                'name' => 'Bob Smith',
                'username' => 'bob',
                'phone' => '25078772786',
                'email' => 'bob@gmail.com',
                'password'
                => bcrypt('bob'),
                'status' => 'active',
            ]);

    }
}
