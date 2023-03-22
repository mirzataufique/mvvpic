import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomepageComponent } from './views/homepage/homepage.component';
// import { AdmissionDetailsComponent } from './views/admission-details/admission-details.component';
// import { AddmissionComponent } from './views/admin-panel/addmission/addmission.component';
// import { StdreportComponent } from './views/admin-panel/stdreport/stdreport.component';
// import { RegisterComponent } from './views/admin-panel/register/register.component';
// import { FltreportComponent } from './views/admin-panel/fltreport/fltreport.component';
// import { LoginComponent } from './views/admin-panel/login/login.component';
import { AuthService } from './Services/auth.service';
import { FacultyComponent } from './views/faculty/faculty.component';

import { FooterComponent } from './views/footer/footer.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

import { ExamsComponent } from './views/exams/exams.component';
import { ResultsComponent } from './views/results/results.component';

import { AboutCollegeComponent } from './views/about-college/about-college.component';
import { AboutStaffComponent } from './views/about-staff/about-staff.component'
import { MissionVissionComponent } from './views/mission-vission/mission-vission.component';
import { PrincipalMsgComponent } from './views/principal-msg/principal-msg.component';
import { FeedbackComponent } from './views/feedback/feedback.component';
import { ImgGaleryComponent } from './views/img-galery/img-galery.component';
import { SlidesComponent } from './views/slides/slides.component';
import { DynamicPageComponent } from './views/dynamic-page/dynamic-page.component';
import { DynamicFormComponent } from './views/dynamic-form/dynamic-form.component';

// import {AdminPanelModule} from './views/admin-panel/admin-panel.module'

const routes: Routes = [
  // {path: '**',component: PageNotFoundComponent},
  // {
  //   path: 'login',
  //   component: LoginComponent,
  //   // loadChildren: ()=> import('./views/homepage/homepage.module').then(m => m.HomepageModule)
  // }, 
  // {
  //   path: 'register',
  //   component: RegisterComponent
  // },
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'dashboard',
    canActivate: [AuthService],
    data: ['ADMIN'],
    component: DashboardComponent
  },
  {
    path: 'slids',
    component: SlidesComponent
  },
  {
    path: 'footer',
    canActivate: [AuthService],
    data: ['ADMIN'],
    component: FooterComponent
  },
  {
    path: 'academics',
    canActivate: [AuthService],
    data: ['ADMIN'],
    component: DynamicPageComponent
  },
  {
    path: 'dynamic-form',
    canActivate: [AuthService],
    data: ['ADMIN'],
    component: DynamicFormComponent
  },
  
  // {
  //   path: 'admission',
  //   canActivate: [AuthService],
  //   data: ['ADMIN'],
  //   component: AddmissionComponent
  // },
  // {
  //   path: 'report',
  //   canActivate: [AuthService],
  //   data: ['ADMIN'],
  //   component: StdreportComponent
  // },
  {
    path: 'faculty',
    canActivate: [AuthService],
    data: ['ADMIN'],
    component: FacultyComponent
  },
  {
    path: 'admin',
    canActivate: [AuthService],
    data: ['ADMIN'],
    loadChildren: () => import('./views/admin-panel/admin-panel.module')
      .then(mod => mod.AdminPanelModule)
  },
  {
    path: 'about-college',
    component: AboutCollegeComponent
  },
  {
    path: 'about-staff',
    component: AboutStaffComponent
  },
  // {
  //   path: 'admission-details',
  //   component: AdmissionDetailsComponent
  // },
  {
    path: 'exams',
    component: ExamsComponent
  },
  {
    path: 'results',
    component: ResultsComponent
  },
  {
    path: 'mis-vission',
    component: MissionVissionComponent
  },
  {
    path: 'principal-msg',
    component: PrincipalMsgComponent
  },
  {
    path: 'feedback',
    component: FeedbackComponent
  },
  {
    path: 'galery',
    component: ImgGaleryComponent
  },
  {
    path: '',
    redirectTo: "home",
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [HomepageComponent, DashboardComponent, 
  // AddmissionComponent,
  // StdreportComponent, 
  // LoginComponent, 
  // RegisterComponent,
  //  FltreportComponent, 
  FooterComponent,
  ExamsComponent, 
  ResultsComponent, 
  // ssionDetailsComponent,
  AboutCollegeComponent,
  AboutStaffComponent, 
  MissionVissionComponent, 
  PrincipalMsgComponent,
  FeedbackComponent,
  ImgGaleryComponent, 
  SlidesComponent,
  PageNotFoundComponent
];