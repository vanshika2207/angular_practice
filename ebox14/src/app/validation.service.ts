import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  getError(formControl: AbstractControl) {
    if ('required' in formControl.errors) {
      return 'Required';
    }
    if ('minlength' in formControl.errors) {
      return 'Minimum length 10';
    }
    if ('maxlength' in formControl.errors) {
      return 'Maximum length100';
    }
    return '';
  }
}
