import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  pin: string;
  message = '';
  clicked = false;
  pincodes: Array<string> = ['1', '2', '3'];
  check() {
    this.clicked = true;
    if (this.pincodes.includes(this.pin)) {
      this.message = 'Delivery is possible';
      return true;
    } else {
      this.message = 'Not possible';
      return false;
    }
  }
}
