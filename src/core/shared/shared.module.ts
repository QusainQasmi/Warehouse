import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CsAutocompleteComponent } from './cs-autocomplete/cs-autocomplete.component';
import { MatModules } from '../mat-modules';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { CsSetupComponent } from './cs-setup/cs-setup.component';
import { CsSelectComponent } from './cs-select/cs-select.component';

@NgModule({
  declarations: [
    CsAutocompleteComponent,
    CsSetupComponent,
    CsSelectComponent
  ],
  imports: [
    CommonModule,
    MatModules
  ],
  exports: [
    CsAutocompleteComponent,
    CsSetupComponent,
    CsSelectComponent
  ],
    providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}
