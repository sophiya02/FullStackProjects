import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShowProfileComponent } from './show-profile/show-profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { MaterialModule } from '../material/material.module';
import { PrimengModuleModule } from '../primeng-module/primeng-module.module';

const routes: Routes = [
  {
    path:'show-profile',
    component: ShowProfileComponent,
    title:'show-profile'
  },
  {
    path:'update-profile',
    component: UpdateProfileComponent,
    title: 'update-profile'
  }
];

@NgModule({
  declarations: [
    ShowProfileComponent,
    UpdateProfileComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MaterialModule,
    PrimengModuleModule
  ]
})
export class ProfileModule { }
