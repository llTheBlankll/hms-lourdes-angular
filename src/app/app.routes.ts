import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: "login",
    loadComponent: () => import("./auth/login/login.component").then(m => m.LoginComponent)
  },
  {
    path: "dashboard",
    loadComponent: () => import("./shared/dashboard/dashboard.component").then(m => m.DashboardComponent)
  },
  {
    path: "**",
    pathMatch: "full",
    redirectTo: "login"
  }
];
