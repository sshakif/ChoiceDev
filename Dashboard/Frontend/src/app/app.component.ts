import { Component, OnInit } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterEvent,
  RouterOutlet,
} from '@angular/router';
import { LayoutComponent } from '@app/components/layout/layout.component';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from '@app/components/side-bar/side-bar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent, CommonModule, SideBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  isLoggedIn = false;
  showAuthLayout = false;
  title = 'dashboard-frontend';


  ngOnInit() {
    // Check initial login state
   
}
}
