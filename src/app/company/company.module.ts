import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RobemexComponent } from './pages/robemex/robemex.component';
import { CompanyHomeComponent } from './pages/company-home/company-home.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [RobemexComponent, CompanyHomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule
  ],exports: [RobemexComponent, CompanyHomeComponent]
})
export class CompanyModule { }
