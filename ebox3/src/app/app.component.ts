import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Students = [
    {id:"id1",name:"George",dept:"IT",grade:8.9,annualIncome:300000},
    {id:"id2",name:"Diana",dept:"CSE",grade:8.0,annualIncome:500000},
    {id:"id3",name:"Mary",dept:"CSE",grade:9.0,annualIncome:250000},
    {id:"id4",name:"Kennedy",dept:"EEE",grade:8.6,annualIncome:600000},
    {id:"id5",name:"Harry",dept:"EEE",grade:7.3,annualIncome:200000},
    {id:"id6",name:"Sandy",dept:"ECE",grade:9.5,annualIncome:280000},
  ]
}
