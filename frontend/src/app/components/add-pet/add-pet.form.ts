import {BaseForm} from "../../utils/base-form";
import {FormControl} from "@angular/forms";

export class AddPetForm extends BaseForm {
  constructor() {
    super({});
    this.addControl('kindOfPet', new FormControl(''));
    this.addControl('dateFrom', new FormControl(''));
    this.addControl('dateTo', new FormControl(''));
  }

  get kindOfPet(): FormControl {
    return this.controls['kindOfPet'] as FormControl;
  }

  get dateFrom(): FormControl {
    return this.controls['dateFrom'] as FormControl;
  }

  get dateTo(): FormControl {
    return this.controls['dateTo'] as FormControl;
  }
}
