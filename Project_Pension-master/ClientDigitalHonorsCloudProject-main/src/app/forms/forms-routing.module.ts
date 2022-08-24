import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AadhaarComponent } from './aadhaar/aadhaar.component';
import { ProcessPensionDetailsComponent } from './process-pension-details/process-pension-details.component';
import { SuccessComponent } from './success/success.component';


const routes: Routes = [
  {path: 'aadhaar', component: AadhaarComponent},
  {path: 'confirmform/:id', component: ProcessPensionDetailsComponent},
  {path: 'success', component: SuccessComponent},
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
