import { Routes } from '@angular/router';
import { ServiceListComponent } from '@app/service-page/service-list/service-list.component';
import { FaqListComponent } from '@app/faq/faq-list/faq-list.component';
import { HomeComponent } from '@app/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
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
