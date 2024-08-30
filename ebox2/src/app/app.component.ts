import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //fill your code
  count = 0;
  Attendance() {
    this.count += 1;
  }
}
