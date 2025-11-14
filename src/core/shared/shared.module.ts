import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CsAutocompleteComponent } from './cs-autocomplete/cs-autocomplete.component';
import { MatModules } from '../mat-modules';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { CsSetupComponent } from './cs-setup/cs-setup.component';
import { CsSelectComponent } from './cs-select/cs-select.component';
import { CsInputComponent } from './cs-input/cs-input.component';
import { CsFormComponent } from './cs-form/cs-form.component';
// import { CsDialogComponent } from './cs-dialog/cs-dialog.component';
// import { DialogService } from '../services/dialog.service';
// import { CsButtonComponent } from './cs-button/cs-button.component';

@NgModule({
  declarations: [
    CsAutocompleteComponent,
    CsSetupComponent,
    CsSelectComponent,
    CsInputComponent,
    CsFormComponent,
    // CsDialogComponent
    // CsButtonComponent
  ],
  imports: [
    CommonModule,
    MatModules
  ],
  exports: [
    CsAutocompleteComponent,
    CsSetupComponent,
    CsSelectComponent,
    CsInputComponent,
    CsFormComponent,
    // CsDialogComponent
    // CsButtonComponent
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    },
    // DialogService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}
