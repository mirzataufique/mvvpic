import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {FltreportComponent} from './fltreport/fltreport.component';
import {StdreportComponent} from './stdreport/stdreport.component';


@NgModule({
  declarations: [LoginComponent,RegisterComponent,FltreportComponent,StdreportComponent], 
  imports: [
    CommonModule,
    RouterModule,
    AdminPanelRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  
  ]
})
export class AdminPanelModule { }
