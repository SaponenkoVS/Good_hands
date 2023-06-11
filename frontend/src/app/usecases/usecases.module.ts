import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GetPetListUsecase} from "./get-pet-list.usecase";

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    GetPetListUsecase
  ]
})
export class UsecasesModule {
}
