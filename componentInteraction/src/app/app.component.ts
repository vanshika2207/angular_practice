import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  first_name = 'vanshika';
  last_name = 'saxena';
  button = false;
  count = 0;
  secretMessage = '';
  yourName = '';
  hobby = '';

  textB = 'default value';
  textP: string = 'you can start with your introduction ....';
  randomNumber = 0;
  color;
  val = 5;
  carname = 'toyoto';
  food: string[] = ['pav bhaji', 'dosa', 'idli'];
  private _schoolName = 'SPS';
  get schoolName() {
    return this._schoolName;
  }
  set schoolName(val: string) {
    this._schoolName = val;
    if (val == 'carmel') {
      alert('this is my first school');
    }
  }
  constructor() {
    setTimeout(() => {
      this.button = true;
    }, 5000);
  }
  increementCount() {
    this.count++;
  }
  message(val) {
    this.secretMessage = val;
  }
  NamePrint(val) {
    this.yourName = val;
  }
  i = '';
  onInput2(val: HTMLInputElement) {
    this.i = val.value;
  }
  paraclicked(event: Event) {
    console.log(event);
  }
  EventMessage(event: Event) {
    // this.hobby = (event.target as HTMLInputElement).value;
    this.hobby = (<HTMLInputElement>event.target).value;
  }
  generateRandomNumber() {
    this.randomNumber = Math.trunc(Math.random() * 100) + 1;
  }
  getColor() {
    if (this.randomNumber % 2 == 0) {
      return (this.color = 'pink');
    } else {
      return (this.color = 'purple');
    }
  }
  aloud(val) {
    this.carname = val;
    if (val == 'i10') {
      alert("That's my car");
    }
  }
  @ViewChild('text') nameElementRef: ElementRef;
  ngAfterViewInit(): void {
    console.log(this.nameElementRef);
    this.nameElementRef.nativeElement.style.backgroundColor = 'orange';
  }
}
