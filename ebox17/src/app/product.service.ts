import { Injectable } from '@angular/core';
import { products } from './product-mock-data';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  //Fill your code here
  url = 'assets/product.json';
  constructor(private http: HttpClient) {}
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }
}
