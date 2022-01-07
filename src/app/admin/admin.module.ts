import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
/*import { NavComponent } from './nav/nav.component';*/
import { LayoutModule } from '@angular/cdk/layout';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { AddadminComponent } from './addadmin/addadmin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HighchartsChartModule } from 'highcharts-angular';




//material Components
import { MultilevelMenuService, NgMaterialMultilevelMenuModule } from "ng-material-multilevel-menu";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatStepperModule} from '@angular/material/stepper';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './forgetpass/dialog/dialog.component';
import { DialogContentComponent } from './forgetpass/dialog/components/dialog-content/dialog-content.component';

import {MatDatepickerModule} from '@angular/material/datepicker';


import { MatTableModule } from '@angular/material/table';

import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";





const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true,
  minScrollbarLength: 20
};


@NgModule({
  declarations: [
    
    AdminComponent,
    /*NavComponent,*/
    
    LoginComponent,
    AddadminComponent,
    
    
    DialogComponent,
    DialogContentComponent,
    

   
    
  ],
  imports: [
    
    NgMaterialMultilevelMenuModule,
    MatStepperModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatInputModule,
    MatFormFieldModule,
    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    RouterModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    HighchartsChartModule,
    MatDialogModule,
    MatCardModule,
    MatDatepickerModule,
    MatTableModule,
    
    
    
   
  ],
  exports:[
     
    LoginComponent
    
  ],
  

 
})

export class AdminModule {}
