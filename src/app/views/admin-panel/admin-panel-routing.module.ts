import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthService } from '../../Services/auth.service'

import { AddmissionComponent } from './addmission/addmission.component';
import { FltreportComponent } from './fltreport/fltreport.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StdreportComponent } from './stdreport/stdreport.component';



const routes: Routes = [
  {
    path: 'fcltreport',
    canActivate: [AuthService],
    data: ['ADMIN'],
    component: FltreportComponent
  }, {
    path: 'login',
    canActivate: [AuthService],
    data: ['ADMIN'],
    component: LoginComponent
  }, {
    path: 'report',
    canActivate: [AuthService],
    data: ['ADMIN'],
    component: StdreportComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'admission',
    canActivate: [AuthService],
    data: ['ADMIN'],
    component: AddmissionComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
