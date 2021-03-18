import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyHomeComponent } from './company/pages/company-home/company-home.component';
import { RobemexComponent } from './company/pages/robemex/robemex.component';
import { HomeComponent } from './home/components/home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'companies', component:CompanyHomeComponent},
  {path:'companies/robemex', component:RobemexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
