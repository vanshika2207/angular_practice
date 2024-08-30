import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Service1Service {
  event = new EventEmitter<string>();
  setevent(data: string) {
    this.event.emit(data);
  }

  constructor() {}
}
