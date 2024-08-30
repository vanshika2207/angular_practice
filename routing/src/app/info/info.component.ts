import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.css',
})
export class InfoComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  user: {
    id: number;
    name: string;
  };
  ngOnInit(): void {
    console.log(this.activatedRoute);
    this.user = {
      id: this.activatedRoute.snapshot.params['id'],
      name: this.activatedRoute.snapshot.params['name'],
    };

    this.activatedRoute.params.subscribe((params: Params) => {
      (this.user.id = params['id']), (this.user.name = params['name']);
    });
    console.log(this.user);
  }
  tocontactme() {
    this.router.navigate(['/contactme'], {
      queryParams: { allowContact: true },
      fragment: 'loading',
    });
  }
}
