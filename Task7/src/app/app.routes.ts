import { Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us';

export const routes: Routes = [
  { path: 'contact', component: ContactUsComponent },
  { path: '', redirectTo: '/contact', pathMatch: 'full' }
];
