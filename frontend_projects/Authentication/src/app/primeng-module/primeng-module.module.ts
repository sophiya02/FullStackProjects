import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    AvatarGroupModule,
    AvatarModule
  ]
})
export class PrimengModuleModule { }
