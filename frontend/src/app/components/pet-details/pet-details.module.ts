import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PetDetailsComponent} from "./pet-details.component";
import {PetDetailsRoutingModule} from "./pet-details-routing.module";
import {PetDetailsUsecasesModule} from "./pet-details-usecases/pet-details-usecases.module";


@NgModule({
  declarations: [
    PetDetailsComponent
  ],
  imports: [
    CommonModule,
    PetDetailsRoutingModule,
    PetDetailsUsecasesModule
  ]
})
export class PetDetailsModule {
}
