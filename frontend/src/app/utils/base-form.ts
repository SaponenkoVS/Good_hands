import {FormControl, FormGroup, ValidationErrors} from "@angular/forms";

export abstract class BaseForm extends FormGroup {

  setFormControlError(formControl: FormControl, error: string) {
    const errors = {} as ValidationErrors;
    errors[error] = true;
    formControl.setErrors(errors);
  }

  setFormGroupError(error: string) {
    const errors = {} as ValidationErrors;
    errors[error] = true;
    Object.keys(this.controls).forEach(key => {
      this.get(key)?.setErrors(errors);
    });
  }

  private getFormValidationErrors() {
    const errors: string[] = [];
    Object.keys(this.controls).forEach(key => {
      const controlErrors: ValidationErrors | null | undefined = this.get(key)?.errors;
      if (!!controlErrors) {
        Object.keys(controlErrors).forEach(keyError => {
          errors.push(keyError);
        });
      }
    });
    return errors;
  }

  getFirstControlError(formControl: FormControl) {
    return Object.keys(formControl?.errors ?? {})[0];
  }
}
