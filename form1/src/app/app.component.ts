import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  pets = ['dog', 'cat', 'love bird', 'rabbit', 'turtle'];
  messagefrom = 'write';
  genders = ['M', 'F', 'O'];
  @ViewChild('f') form: NgForm;
  nameP: string;
  onSubmit() {
    console.log(this.form);
    console.log(this.form.value);
    this.nameP = this.form.value.user.name;
    console.log(this.nameP);
  }
  suggest() {
    const suggestedName = 'Vanshika2207';
    // this.form.setValue({
    //   user: {
    //     name: 'Vanshika',
    //     age: 22,
    //   },
    //   gender: 'F',
    //   email: 'saxenavanshika22@gmail.com',
    //   pets: 'love bird',
    //   mobile: '9993712266',
    //   message: 'hello',
    //   username: suggestedName,
    // });
    this.form.form.patchValue({
      username: suggestedName,
    });
  }
}
