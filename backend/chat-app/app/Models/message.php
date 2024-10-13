<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class message extends Model
{
    use HasFactory;
    protected $fillable = [
        'sender_name',
        'receiver_name',
        'message',
        'is_read',
        'read_at',
    ];
}
