import {Component} from '@angular/core';
import {AddPetDataForm} from "./add-pet-data/ add-pet-data.form";
import {AddPetLocationForm} from "./app-pet-location/add-pet-location.form";

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.scss']
})
export class AddPetComponent {
  dataForm = new AddPetDataForm()
  locationForm = new AddPetLocationForm()
}
