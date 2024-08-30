import { Component } from '@angular/core';
import { Service1Service } from '../service1.service';
import { Service2Service } from '../service2.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  constructor(
    public service: Service1Service,
    public service2: Service2Service
  ) {}
  send() {
    this.service.setevent('hello from child');
  }
  send2() {
    this.service2.setevent('how are you');
  }
}
