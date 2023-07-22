import {BaseForm} from "../../../utils/base-form";
import {FormControl} from "@angular/forms";

export class MainListFiltersForm extends BaseForm {
  constructor() {
    super({});
    this.addControl('city', new FormControl(''));
    this.addControl('kindOfPet', new FormControl(''));
    this.addControl('dateFrom', new FormControl(''));
    this.addControl('dateTo', new FormControl(''));
  }

  get city(): FormControl {
    return this.controls['city'] as FormControl;
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
