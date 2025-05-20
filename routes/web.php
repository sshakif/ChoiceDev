<?php

use App\Http\Controllers\Admin\AboutUsController;
use App\Http\Controllers\Admin\ProjectCategoryController;
use App\Http\Controllers\Admin\ProjectController;
use App\Http\Controllers\Admin\ProjectImageController;
use App\Http\Controllers\Admin\ServiceController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\EventController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Admin\UserManagementController;
use Spatie\Permission\Middlewares\PermissionMiddleware;

//Frontend Route List
Route::get('/', [UserController::class, 'home'])->name('home');
Route::get( '/services', [UserController::class, 'services'])->name('services');
Route::get( '/resources', [UserController::class, 'resources'])->name('resources');
Route::get('/contact', [UserController::class, 'contact'])->name('contact');


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

    //For about_us
    Route::get('/about', [AboutUsController::class, 'index'])->name('about.list');
    Route::post('/add_about', [AboutUsController::class, 'store'])->name('about.add');
    Route::delete('/delete_about/{id}', [AboutUsController::class, 'destroy'])->name('about.delete');
    Route::get('/about/edit/{id}', [AboutUsController::class, 'edit'])->name('about.edit');
    Route::put('/about/update/{id}', [AboutUsController::class, 'update'])->name('about.update');

    //For Service
    Route::get('/service', [ServiceController::class, 'index'])->name('service.list');
    Route::post('/add_service', [ServiceController::class, 'store'])->name('service.add');
    Route::delete('/delete_service/{id}', [ServiceController::class, 'destroy'])->name('service.delete');
    Route::get('/service/edit/{id}', [ServiceController::class, 'edit'])->name('service.edit');
    Route::put('/service/update/{id}', [ServiceController::class, 'update'])->name('service.update');

    
    // Project Category Routes
    Route::get('/project/category', [ProjectCategoryController::class, 'index'])->name('project.category.list');
    Route::post('/add_project_category', [ProjectCategoryController::class, 'store'])->name('project.category.add');
    Route::delete('/delete_project_category/{id}', [ProjectCategoryController::class, 'destroy'])->name('project.category.delete');
    Route::get('/project/category/edit/{id}', [ProjectCategoryController::class, 'edit'])->name('project.category.edit');
    Route::put('/project/category/update/{id}', [ProjectCategoryController::class, 'update'])->name('project.category.update');

    // Project Routes
    Route::get('/project', [ProjectController::class, 'index'])->name('project.list');
    Route::get('/project/create', [ProjectController::class, 'create'])->name('project.create');
    Route::post('/add_project', [ProjectController::class, 'store'])->name('project.add');
    Route::delete('/delete_project/{id}', [ProjectController::class, 'destroy'])->name('project.delete');
    Route::get('/project/edit/{id}', [ProjectController::class, 'edit'])->name('project.edit');
    Route::put('/project/update/{id}', [ProjectController::class, 'update'])->name('project.update');
    Route::get('/project/{id}', [ProjectController::class, 'show'])->name('project.show');

    // Project Image Routes
    Route::post('/add_project_image', [ProjectImageController::class, 'store'])->name('project.image.add');
    Route::delete('/delete_project_image/{id}', [ProjectImageController::class, 'destroy'])->name('project.image.delete');

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

