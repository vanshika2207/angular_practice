import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  getError(formControl: AbstractControl) {
    if (formControl.errors?.required) {
      return 'Required';
    }
    if (formControl.errors?.minlength) {
      return `Min length is ${formControl.errors?.minlength.requiredLength}`;
    }
    if (formControl.errors?.maxlength) {
      return 'Maximum length 100';
    }
    return '';
  }
}
