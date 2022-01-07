import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserdashComponent } from './userdash.component';
import { ProfilComponent } from 'src/app/modules/profil/profil.component';
import { RouterModule } from '@angular/router';
import { AccountComponent } from 'src/app/modules/account/account.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MycarsComponent } from 'src/app/modules/mycars/mycars.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule }   from '@angular/forms';
import { NewcarsComponent } from 'src/app/modules/newcars/newcars.component';
import {ReactiveFormsModule } from '@angular/forms';
import { UsercarComponent } from 'src/app/modules/usercar/usercar.component';


@NgModule({
  declarations: [
    UserdashComponent,
    ProfilComponent,
    AccountComponent,
    MycarsComponent,
    NewcarsComponent,
    UsercarComponent

    
    

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatGridListModule,
    FormsModule
   
  ]
})
export class UserdashModule { }
