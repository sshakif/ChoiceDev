import { Routes } from '@angular/router';
import { FaqListComponent } from './faq/faq-list/faq-list.component';
import { HomeComponent } from './home/home.component';
import { ServiceListComponent } from '@app/service-page/service-list/service-list.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'faq-list',
    component: FaqListComponent,
  },
  {
    path: 'service-list',
    component: ServiceListComponent,
  },
  
];
