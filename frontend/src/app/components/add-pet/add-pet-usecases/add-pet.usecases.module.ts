import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {GeocodeUsecase} from "./geocode.usecase";
import {AddPetUsecase} from "./add-pet.usecase";

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    GeocodeUsecase,
    AddPetUsecase
  ]
})
export class AddPetUsecasesModule {
}
