import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FilterPetsUsecase} from "./filter-pets.usecase";
import {GeocodeUsecase} from "./geocode.usecase";

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    FilterPetsUsecase,
    GeocodeUsecase
  ]
})
export class MainListUsecasesModule {
}
