import { Routes } from '@angular/router';
import { SignUpPage } from './sign-up-page/sign-up-page';
import { BabyList } from './baby-list/baby-list';
import { BabyForm } from './baby-form/baby-form';

export const routes: Routes = [
    { path: '', redirectTo: 'baby-list', pathMatch: 'full' },
    { path: 'sign-up', component: SignUpPage },
    { path: 'baby-form', component: BabyForm },
    { path: 'baby-list', component: BabyList },
    { path: '**', redirectTo: 'baby-list' }
];
