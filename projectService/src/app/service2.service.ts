import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class Service2Service {
  event = new Subject<string>();
  setevent(data: string) {
    this.event.next(data);
  }

  constructor() {}
}
