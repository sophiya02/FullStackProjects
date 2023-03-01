import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent,
    title:'login'
  },
  {
    path:'register',
    component: RegisterComponent,
    title: 'register'
  }
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MaterialModule
  ]
})
export class AuthModule { }
