import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // fill your code
  userinput;
  item = ['Cauliflower', 'Oats', 'Tomato Sauce'];
  add() {
    this.item.push(this.userinput);
    this.userinput = '';
  }
  remove(i) {
    const index = this.item.indexOf(i);
    this.item.splice(index, 1);
  }
}
