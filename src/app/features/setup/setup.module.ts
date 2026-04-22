import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SetupComponent } from './setup.component';
import { SharedModule } from '../../../core/shared/shared.module';
import { MatModules } from '../../../core/mat-modules';
import { LocationComponent } from './location/location.component';
import { PartyComponent } from './party/party.component';
import { ContainerTypeComponent } from './container-type/container-type.component';
import { ChargeTypeComponent } from './charge-type/charge-type.component';
import { CurrencyComponent } from './currency/currency.component';
import { ExchangeRateComponent } from './exchange-rate/exchange-rate.component';
import { UnitOfMeasureComponent } from './unit-of-measure/unit-of-measure.component';
import { ServiceTypeComponent } from './service-type/service-type.component';
import { PaymentTermsComponent } from './payment-terms/payment-terms.component';
import { TaxSetupComponent } from './tax-setup/tax-setup.component';

const routes: Routes = [
  {  path: 'location', component: LocationComponent },
  {  path: 'party', component: PartyComponent },
  {  path: 'container-type', component: ContainerTypeComponent },
  {  path: 'charge-type', component: ChargeTypeComponent },
  {  path: 'exchange-rate', component: ExchangeRateComponent },
  {  path: 'unit-of-measure', component: UnitOfMeasureComponent },
  {  path: 'service-type', component: ServiceTypeComponent },
  {  path: 'payment-terms', component: PaymentTermsComponent },
  {  path: 'tax-setup', component: TaxSetupComponent },
];

@NgModule({
  declarations: [LocationComponent, PartyComponent], 
  imports: [CommonModule, MatModules, SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SetupModule {}