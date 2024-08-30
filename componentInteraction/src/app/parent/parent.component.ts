import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { SharedService } from '../shared.service';
import { Animal } from '../animal';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent implements OnInit {
  shared;
  constructor(private sharedService: SharedService) {}
  ngOnInit() {
    this.sharedService.event.subscribe((data) => {
      this.shared = data;
      console.log(data);
      console.log(this.shared);
    });
  }
  products: Product[] = [
    { id: 1, name: 'apple', cost: '39' },
    { id: 2, name: 'banana', cost: '30' },
  ];

  animals: Animal[] = [
    { size: 45, name: 'dog' },
    { size: 50, name: 'goat' },
  ];
  pet = 'manis';
  greetingFromParent(val) {
    alert(val);
    alert('good morning hello');
  }
  goodMorningFromParent(name: string) {
    alert('Good Morning ' + name);
  }
  messageFromParent(val: string) {
    alert(val);
  }
  clickc(val: string) {
    alert(val);
  }
  emitA(val) {
    alert(val.name);
  }
  value: { name: string; age: number };
  demo(val: { name: string; age: number }) {
    this.value = val;
  }
}
