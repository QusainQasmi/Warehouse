import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../core/shared/shared.module';
import { MatModules } from '../../../core/mat-modules';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {  path: 'users', component: UsersComponent},


];
 
@NgModule({
  declarations: [], 
  imports: [CommonModule, MatModules, SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UtilitiesModule {}