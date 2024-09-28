<?php

use Illuminate\Support\Facades\Route;
use App\Models\User;

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

require __DIR__ . '/auth.php';

Route::get('/api/get-users/{userId}', function ($user_id) {

   try {
    $users = User::where('id', '!=', $user_id)->get();
    return response()->json($users);

   } catch (\Throwable $th) {
    return response()->json(['error' => 'An error occurred while fetching users.']);
   }
});
