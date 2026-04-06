import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SetupComponent } from './setup.component';
import { SharedModule } from '../../../core/shared/shared.module';
import { MatModules } from '../../../core/mat-modules';
import { LocationComponent } from './location/location.component';
import { PartyComponent } from './party/party.component';

const routes: Routes = [
  {  path: 'location', component: LocationComponent },
  {  path: 'party', component: PartyComponent },
];

@NgModule({
  declarations: [LocationComponent, PartyComponent], 
  imports: [CommonModule, MatModules, SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SetupModule {}