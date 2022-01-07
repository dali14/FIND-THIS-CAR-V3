import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {  MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { AreaComponent } from './widgets/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { PieComponent } from './widgets/pie/pie.component';
import { HeaderuserComponent } from './dashusercomponents/headeruser/headeruser.component';
import { SidebaruserComponent } from './dashusercomponents/sidebaruser/sidebaruser.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    PieComponent,
    //account user
    HeaderuserComponent,
    SidebaruserComponent
    
  ],
  imports: [
   
    FormsModule, ReactiveFormsModule,
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    FlexLayoutModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule
  ],
  exports:[
    //admin dashboard
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    PieComponent,
    // user account
    HeaderuserComponent,
    SidebaruserComponent,
    


    

  ]
})
export class SharedModule { }
