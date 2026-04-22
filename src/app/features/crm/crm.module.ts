import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../core/shared/shared.module';
import { MatModules } from '../../../core/mat-modules';
import { LeadComponent } from './lead/lead.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { QuotationComponent } from './quotation/quotation.component';

const routes: Routes = [
  {  path: 'lead', component: LeadComponent },
  {  path: 'inquiry', component: InquiryComponent },
  {  path: 'quotation', component: QuotationComponent },

];

@NgModule({
  declarations: [], 
  imports: [CommonModule, MatModules, SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CRMModule {}