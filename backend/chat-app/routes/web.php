<?php

use Illuminate\Support\Facades\Route;
use App\Models\User;

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

require __DIR__ . '/auth.php';

Route::get('/api/get-users/{userName}', function ($userName) {

   try {
    $users = User::where('username', '!=', $userName)->get();
    return response()->json($users);

   } catch (\Throwable $th) {
    return response()->json(['error' => 'An error occurred while fetching users.']);
   }
});
