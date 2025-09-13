import { Routes } from '@angular/router';
import { ServiceListComponent } from '@app/service-page/service-list/service-list.component';
import { FaqListComponent } from '@app/faq/faq-list/faq-list.component';
import { HomeComponent } from '@app/home/home.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { AttachmentsComponent } from './attachments/attachments.component';

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
   {
    path: 'employee-list',
    component: EmployeeListComponent,
  },
     {
    path: 'attachments',
    component: AttachmentsComponent,
  },
];
