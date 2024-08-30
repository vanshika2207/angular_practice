import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrl: './contactme.component.css',
})
export class ContactmeComponent implements OnInit {
  constructor(
    private myRoute: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.fragment);
    console.log(this.activatedRoute.snapshot.queryParams);
  }
  toHome() {
    this.myRoute.navigate(['/home']); // /home
  }
  toInfo() {
    this.myRoute.navigate(['/info']);
    // this.myRoute.navigate(['info'], { relativeTo: this.activatedRoute }); // contactme/info
  }
}
