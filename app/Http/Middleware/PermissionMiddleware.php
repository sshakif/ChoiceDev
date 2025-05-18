<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class PermissionMiddleware
{
    public function handle($request, Closure $next, $permission)
    {
        // Check if the authenticated user has the specified permission
        if (Auth::check() && Auth::user()->hasPermissionTo($permission)) {
            return $next($request);
        }

        return redirect('/')->with('error', 'Unauthorized. You do not have permission to access this page.');
    }
}
