import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Welcome to Online shopping website';
  constructor(private service: ProductService) {}
  products: Product[] = [];
  ngOnInit() {
    this.service.getProducts().subscribe((data) => {
      this.products = data;
    });
    console.log(this.products);
  }
}
