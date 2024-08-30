import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  // event = new EventEmitter<string>();
  // constructor() {}
  // emitEvent(data: string) {
  //   this.event.emit(data);
  // }
  // getEvent() {
  //   return this.event;
  // }
  event = new EventEmitter<string>();
  constructor() {}
  emitEvent(data: string) {
    this.event.emit(data);
  }
  getEvent() {
    return this.event;
  }
}
