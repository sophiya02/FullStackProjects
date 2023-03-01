import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  // {path:'', component: AppComponent},
  {
    path:'api/v1/profile',
    loadChildren: () => import('./profile/profile.module') .then(m => m.ProfileModule)
  },
  {
    path:'api/v1/auth',
    loadChildren: () => import('./auth/auth.module') .then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
