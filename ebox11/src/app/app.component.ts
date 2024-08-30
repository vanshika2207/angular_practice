import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from './product.service';
import { Observable } from 'rxjs';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // products!: Observable<Product[]>;
  products?: Product[];
  productForm!: FormGroup;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    // Initialize the form group
    this.productForm = new FormGroup({
      startingPrice: new FormControl(null),
      endingPrice: new FormControl(null),
    });

    // Load all products initially
    this.applyFilter();
  }

  applyFilter() {
    // Retrieve the form values
    const start = this.productForm.get('startingPrice')?.value;
    const end = this.productForm.get('endingPrice')?.value;

    // Call ProductService to get filtered products
    this.productService.getProducts(start, end).subscribe((data) => {
      this.products = data;
    });
  }
}
