<?php

namespace App\Providers;

use App\Models\Faq;
use App\Models\ServicePage;
use Flat3\Lodata\Facades\Lodata;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
        Lodata::discover(Faq::class);
        Lodata::discover(ServicePage::class);
    }
}
