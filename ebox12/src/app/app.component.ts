import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //fill your code here
  myForm: FormGroup;
  submitted = false;
  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl(null),
      price: new FormControl(null),
      brand: new FormControl(null),
      image: new FormControl(null),
    });
  }
  submit() {
    console.log(this.myForm);
    this.submitted = true;
  }
}
