import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceListComponent } from '@app/service-page/service-list/service-list.component';

export const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'service-list',
    component: ServiceListComponent,
  },
  
];
