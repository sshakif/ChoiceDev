import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import {
  AvatarComponent,
  BarComponent,
  PopoverComponent,
} from '@ui5/webcomponents-ngx';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-layout',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    SideBarComponent,
    PopoverComponent,
    BarComponent,
    AvatarComponent,
    CommonModule,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {

  loading = false;
  isCollapsed: boolean = false;
  popoverOpen = false;



  ngOnInit(): void {
    
  }
  toggleSidenav(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  }
