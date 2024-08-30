import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product';
import { SharedService } from '../shared.service';
import { Animal } from '../animal';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'], // Corrected the typo here
})
export class ChildComponent {
  @Input('p') productList: Product[];
  @Input() animalList: Animal[];

  @Output() greet = new EventEmitter();

  greetChild(val) {
    this.greet.emit(val);
  }
  val = 'vanshika';
  @Output() good = new EventEmitter<string>();
  goodMorning() {
    this.good.emit(this.val);
  }
  @Output() message = new EventEmitter<string>();
  sendMessage() {
    this.message.emit('hello how are you doing');
  }

  @Output() clickc = new EventEmitter<string>();
  clickedchild() {
    this.clickc.emit('the child button is clicked');
  }
  constructor(private sharedservice: SharedService) {}
  sendMessageviaSharedService() {
    const sharedMessage = 'hello from componet a';
    this.sharedservice.emitEvent(sharedMessage);
  }
  @Output() animalEmit = new EventEmitter<Animal>();
  animalC() {
    this.animalEmit.emit({
      size: 20,
      name: 'cat',
    });
  }
  @Output() demo = new EventEmitter<{ name: string; age: number }>();
  myobj = {
    name: 'Vanshika',
    age: 22,
  };
  demoOutput() {
    this.demo.emit(this.myobj);
  }
}
