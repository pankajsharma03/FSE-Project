import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AadhaarComponent } from './aadhaar/aadhaar.component';
import { ProcessPensionDetailsComponent } from './process-pension-details/process-pension-details.component';
import { FormsRoutingModule } from './forms-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { SuccessComponent } from './success/success.component';



@NgModule({
  declarations: [
    AadhaarComponent,
    ProcessPensionDetailsComponent,
    SuccessComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsRoutingModule
  ]
})
export class FormsModule { }
