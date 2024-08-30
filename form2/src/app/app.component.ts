import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  pets = ['dog', 'cat', 'love bird', 'rabbit', 'turtle'];
  genders = ['M', 'F', 'O'];
  myForm: FormGroup;

  ngOnInit(): void {
    this.myForm = new FormGroup({
      user: new FormGroup({
        name: new FormControl(null, [
          Validators.required,
          Validators.minLength(5),
        ]),
        age: new FormControl(null, [
          Validators.required,
          Validators.pattern('^[0-9]{2}$'),
          Validators.min(20),
          Validators.max(60),
        ]),
      }),
      email: new FormControl(null, [Validators.required, Validators.email]),
      pets: new FormControl('dog'),
      mobile: new FormControl(null, [
        Validators.required,
        Validators.pattern('^(\\+91[ -]?|0)?[6-9][0-9]{9}$'),
      ]),
      message: new FormControl('write'),
      gender: new FormControl('F'),
      username: new FormControl('', this.forbidden.bind(this)),
      hobby: new FormArray([
        new FormControl('shopping'),
        new FormControl('Cooking'),
      ]),
      cooking: new FormArray([
        new FormControl('pavbhaji'),
        new FormControl('dosa'),
      ]),
    });
  }

  onSubmit() {
    console.log(this.myForm.value);
  }

  suggest() {
    this.myForm.patchValue({
      username: 'Vanshika',
    });
  }

  get hobbyControl() {
    return this.myForm.get('hobby') as FormArray;
  }

  addHobby() {
    const newControl = new FormControl(null);
    this.hobbyControl.push(newControl);
  }

  removeHobby(index: number) {
    this.hobbyControl.removeAt(index);
  }
  get cookingControl() {
    return this.myForm.get('cooking') as FormArray;
  }
  addCooking() {
    const newControl = new FormControl(null);
    this.cookingControl.push(newControl);
  }
  removeCooking(index) {
    this.cookingControl.removeAt(index);
  }

  forbiddenNames = ['chris', 'trsis'];

  // forbidden = (control: FormControl): { [s: string]: boolean } | null => {
  //   if (this.forbiddenNames.includes(control.value)) {
  //     return { nameisForbidden: true };
  //   }
  //   return null;
  // };
  forbidden(control: FormControl): { [key: string]: boolean } | null {
    if (this.forbiddenNames.includes(control.value)) {
      return { nameisForbidden: true };
    }
    return null;
  }
}
