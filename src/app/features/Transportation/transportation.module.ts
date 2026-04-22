import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../core/shared/shared.module';
import { MatModules } from '../../../core/mat-modules';
import { JobComponent } from './job/job.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { DriverComponent } from './driver/driver.component';

const routes: Routes = [
  {  path: 'job', component: JobComponent },
  {  path: 'vehicle', component: VehicleComponent },
  {  path: 'driver', component: DriverComponent },

];

@NgModule({
  declarations: [], 
  imports: [CommonModule, MatModules, SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TransportationModule {}