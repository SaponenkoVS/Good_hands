import {BaseForm} from "../../../utils/base-form";
import {FormControl} from "@angular/forms";

export class AddPetLocationForm extends BaseForm {
  constructor() {
    super({});
    this.addControl('city', new FormControl(''));
    this.addControl('street', new FormControl(''));
    this.addControl('building', new FormControl(''));
    this.addControl('latitude', new FormControl(''));
    this.addControl('longitude', new FormControl(''));
  }

  get city(): FormControl {
    return this.controls['city'] as FormControl;
  }

  get street(): FormControl {
    return this.controls['street'] as FormControl;
  }

  get building(): FormControl {
    return this.controls['building'] as FormControl;
  }

  get latitude(): FormControl {
    return this.controls['latitude'] as FormControl;
  }

  get longitude(): FormControl {
    return this.controls['longitude'] as FormControl;
  }
}
