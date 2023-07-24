import {Component, ViewChild} from '@angular/core';
import {AddPetDataForm} from "./add-pet-data/ add-pet-data.form";
import {AddPetLocationForm} from "./app-pet-location/add-pet-location.form";
import {AppPetLocationComponent} from "./app-pet-location/app-pet-location.component";
import {AddPetUsecase} from "./add-pet-usecases/add-pet.usecase";

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.scss']
})
export class AddPetComponent {
  constructor(private addPetUsecase: AddPetUsecase) {
  }

  @ViewChild("location") addPetLocationComponent: AppPetLocationComponent = {} as AppPetLocationComponent;
  dataForm = new AddPetDataForm()
  locationForm = new AddPetLocationForm()

  mapInit(event: any) {
    if (event == 1) {
      setTimeout(() => {
        this.addPetLocationComponent.mapInit()
      }, 200)
    }
  }

  savePet() {
    this.addPetUsecase.execute({...this.dataForm.value, ...this.locationForm.value}).subscribe(() => {
      console.log("dupa")
    })
  }
}
