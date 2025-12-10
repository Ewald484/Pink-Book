import { Routes } from '@angular/router';
import { SignUpPage } from './sign-up-page/sign-up-page';

export const routes: Routes = [
    { path: '', redirectTo: 'SignUp', pathMatch: 'full' },
    { path: 'SignUp', component: SignUpPage }
];
