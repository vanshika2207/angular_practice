import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { products } from './product-data'; // Assuming you have a file or service providing product data
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getProducts(sPrice?: number, ePrice?: number): Observable<Product[]> {
    if (sPrice != undefined && ePrice != undefined) {
      // Filter products based on price range
      return of(products.filter((p) => p.price >= sPrice && p.price <= ePrice));
    } else {
      // Return all products if no price range specified
      return of(products);
    }
  }
}
