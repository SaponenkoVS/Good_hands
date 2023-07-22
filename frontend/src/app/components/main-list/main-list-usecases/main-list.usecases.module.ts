import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FilterPetsUsecase} from "./filter-pets.usecase";

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    FilterPetsUsecase
  ]
})
export class MainListUsecasesModule {
}
