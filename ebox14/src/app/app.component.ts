import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { ValidationService } from './validation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  postForm: FormGroup;
  posted = false;
  constructor(
    private fb: FormBuilder,
    public validationService: ValidationService
  ) {
    this.postForm = this.fb.group({
      title: [null, [Validators.required]],
      description: [
        null,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(100),
        ],
      ],
    });
  }

  savePost() {
    if (this.postForm.valid) {
      this.posted = true;
      console.log(this.postForm);
      this.postForm.reset();
    }
  }
}
