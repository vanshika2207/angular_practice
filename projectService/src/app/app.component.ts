import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { Service1Service } from './service1.service';
import { Service2Service } from './service2.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  message = '';
  message2 = '';
  constructor(
    public service: Service1Service,
    public service2: Service2Service
  ) {}
  ngOnInit() {
    this.service.event.subscribe((value) => {
      this.message = value;
    });
    this.service2.event.subscribe((value) => {
      this.message2 = value;
    });
  }
}
