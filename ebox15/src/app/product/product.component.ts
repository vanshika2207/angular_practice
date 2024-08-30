import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ProductService],
})
export class ProductComponent implements OnInit {
  productList = [];
  constructor(public productService: ProductService) {}

  ngOnInit() {
    //Fill your code
    this.productList = this.productService.getProductList();
  }
}
