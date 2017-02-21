import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  // { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'about', loadChildren: 'app/about/about.module#AboutModule' },
  { path: 'contact', component: ContactComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', component: NotFoundComponent },
];


export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);