import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyHomeComponent } from './pages/company-home/company-home.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ROBEMEXProjectsComponent } from './paages/robemex-projects/robemex-projects.component';



@NgModule({
  declarations: [CompanyHomeComponent, ROBEMEXProjectsComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule
  ],exports: [CompanyHomeComponent, ROBEMEXProjectsComponent]
})
export class CompanyModule { }
