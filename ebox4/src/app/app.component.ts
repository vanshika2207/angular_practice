import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //fill your code
  name = 'Vanshika Saxena';
  color = '#3498db';
  reset() {
    this.name = 'Vnasika Saxena';
    this.color = '#3498db';
  }
}
