<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\EventController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Admin\UserManagementController;
use Spatie\Permission\Middlewares\PermissionMiddleware;

//Frontend Route List
Route::get('/', [UserController::class, 'Index'])->name('index');
Route::get('/about', [UserController::class, 'About'])->name('about');
Route::get('/view-events', [UserController::class, 'Events'])->name('events');
Route::get('/event/details/{id}' , [UserController::class, 'Details'])->name('details');
Route::get('/terms-conditions' , [UserController::class, 'Terms'])->name('terms');
Route::get('/privacy-policy' , [UserController::class, 'Privacy'])->name('privacy');
Route::get('/event/details/{id}' , [UserController::class, 'Details'])->name('details');

// ticket request
Route::post('/event/ticket-request' , [UserController::class, 'Request_ticket'])->name('ticket.request');



Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__.'/auth.php';



Route::middleware('admin')->group(function(){
    Route::get('/admin/dashboard', [AdminController::class, 'AdminDashboard'])->name('admin.dashboard');
});

Route::get('/admin/login', [AdminController::class, 'AdminLogin'])->name('admin.login');
Route::post('/admin/login_submit', [AdminController::class, 'AdminLoginSubmit'])->name('admin.login_submit');
Route::get('/admin/logout', [AdminController::class, 'AdminLogout'])->name('admin.logout');


//Admin route list
Route::middleware('admin')->group(function(){

    //For Category
    Route::get('/category', [CategoryController::class, 'index'])->name('category.list');
    Route::post('/add_category' , [CategoryController::class, 'Store'])->name('category.add');
    Route::delete('/delete_category/{id}' , [CategoryController::class, 'Destroy'])->name('category.delete');
    Route::get('/category/edit/{id}' , [CategoryController::class, 'Edit'])->name('category.edit');
    Route::put('/category/update/{id}' , [CategoryController::class, 'Update'])->name('category.update');
    // end cateogry


    // role and permission
    Route::post('/store/user', [UserManagementController::class, 'userStore'])->name('store.user');
    Route::put('/user/{id}', [UserManagementController::class, 'userUpdate'])->name('user.update');
    Route::get('/role', [UserManagementController::class, 'role'])->name('role');
    Route::get('/assign/role', [UserManagementController::class, 'assign_role'])->name('assign.role');
    Route::post('/save/role', [UserManagementController::class, 'store_role'])->name('store.role');
    Route::put('/roles/{id}', [UserManagementController::class, 'updateRole'])->name('roles.update');
    Route::delete('/roles/{id}', [UserManagementController::class, 'deleteRole'])->name('roles.delete');
    Route::post('/users/{id}/assign-role', [UserManagementController::class, 'assignRole'])->name('users.assign-role');

});

