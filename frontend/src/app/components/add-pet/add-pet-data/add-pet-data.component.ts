import {Component, Input} from '@angular/core';
import {AddPetDataForm} from "./ add-pet-data.form";
import {Pet} from "../../../models/enums/pet.enum";
import {DomEvent} from "leaflet";
import {Image} from "../../../models/image.interface";


@Component({
  selector: 'app-add-pet-data',
  templateUrl: './add-pet-data.component.html',
  styleUrls: ['./add-pet-data.component.scss']
})
export class AddPetDataComponent {
  @Input() dataForm: AddPetDataForm = new AddPetDataForm()
  uploadedImages: Image[] = []
  pets = Object.keys(Pet).filter((petEnum) => typeof Pet[petEnum as keyof typeof Pet] === "number");

  onUploadImage(event: any) {
    const files = Array.from(event.target.files)
    files.forEach((file: any) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.uploadedImages.push({
          main: false,
          base64: reader.result as string
        })
      };
    })
    this.dataForm.images.setValue(this.uploadedImages)
  }
}
