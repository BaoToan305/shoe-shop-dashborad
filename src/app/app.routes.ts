import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './routes/guard/auth.guard';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },  // Route mặc định chuyển tới login
  { path: 'login', component: LoginComponent },          // Route cho trang login
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },       // Route cho footer
];
