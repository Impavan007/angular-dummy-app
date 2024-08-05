import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'Signup', component: SignupComponent },
    { path: 'homepage', component: HomepageComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect to login page by default
    { path: '**', component: NotfoundComponent },
];
