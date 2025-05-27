<?php

namespace App\Providers;

use App\Models\Employee;
use App\Models\Faq;
use App\Models\ServicePage;
use Flat3\Lodata\Facades\Lodata;
use Illuminate\Support\ServiceProvider;
// use RalfHortt\Lodata\Facades\Lodata;

use Spatie\MediaLibrary\MediaCollections\Models\Media;
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
   public function boot()
            {
                // ✅ Step 1: Discover the Eloquent models FIRST
                Lodata::discover(ServicePage::class); // Must be first
                Lodata::discover(Employee::class);

                // ✅ Step 2: Now define relationships AFTER discovery
                // Lodata::getEntitySet('ServicePage')->discoverRelationship('employee'); // lowercase
                // Lodata::getEntitySet('Employee')->discoverRelationship('servicePage'); // lowercase
            }

}
