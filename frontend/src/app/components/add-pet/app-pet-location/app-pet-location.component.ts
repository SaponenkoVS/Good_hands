import {Component, Input} from '@angular/core';
import {AddPetLocationForm} from "./add-pet-location.form";
import {City} from "../../../models/enums/city.enum";

@Component({
  selector: 'app-app-pet-location',
  templateUrl: './app-pet-location.component.html',
  styleUrls: ['./app-pet-location.component.scss']
})
export class AppPetLocationComponent {
  @Input() locationForm: AddPetLocationForm = new AddPetLocationForm()

  cities = Object.keys(City).filter((cityEnum) => typeof City[cityEnum as keyof typeof City] === "number");
}
