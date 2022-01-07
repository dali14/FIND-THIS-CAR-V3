import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';





@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    
  
  ]
})
export class AuthModule { }
