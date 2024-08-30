import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class Validation {
  getErrors(formControl: AbstractControl) {
    if (formControl.errors?.required) {
      return 'Required';
    }
    if (formControl.errors?.minlength) {
      return `Minimum length ${formControl.errors?.minlength.requiredLength}`;
    }
    if (formControl.errors?.maxlength) {
      return `Maximum length ${formControl.errors?.maxlength.requiredLength}`;
    }
    return '';
  }
}
