import { Routes } from '@angular/router';
import { ServiceListComponent } from '@app/service-page/service-list/service-list.component';
import { FaqAddComponent } from './faq/faq-add/faq-add.component';
import { FaqDetailsComponent } from './faq/faq-details/faq-details.component';
import { FaqEditComponent } from './faq/faq-edit/faq-edit.component';
import { FaqListComponent } from './faq/faq-list/faq-list.component';
import { HomeComponent } from './home/home.component';

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
