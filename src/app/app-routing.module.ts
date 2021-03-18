import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompanyHomeComponent } from './company/pages/company-home/company-home.component';
import { ROBEMEXProjectsComponent } from './company/paages/robemex-projects/robemex-projects.component';
import { HomeComponent } from './home/components/home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'companies', component:CompanyHomeComponent},
  {path:'companies/projects/robemex', component:ROBEMEXProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
