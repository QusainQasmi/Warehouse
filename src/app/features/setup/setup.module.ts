import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SetupComponent } from './setup.component';
import { SharedModule } from '../../../core/shared/shared.module';
import { MatModules } from '../../../core/mat-modules';

const routes: Routes = [
  { path: '', component: SetupComponent }
];

@NgModule({
  imports: [CommonModule, MatModules, SharedModule, SetupComponent, RouterModule.forChild(routes)],
})
export class SetupModule {}
