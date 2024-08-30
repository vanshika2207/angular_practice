import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  products = [
    {
      id: 11,
      name: 'Samsung Galaxy Note 10',
      category: 'Mobiles',
      price: 69900,
      availQuantity: 5,
      imageUrl: '../assets/images/product1.jpg',
    },
    {
      id: 12,
      name: 'SkullCandy BT Inkd Plus',
      category: 'Bluetooth Headset',
      price: 1999,
      availQuantity: 20,
      imageUrl: '../assets/images/product2.jpg',
    },
    {
      id: 13,
      name: 'JBL Flip 3 Bluetooth speaker',
      category: 'Speakers',
      price: 5999,
      availQuantity: 7,
      imageUrl: '../assets/images/product4.jpg',
    },
    {
      id: 14,
      name: 'Conekt Volt Power Bank',
      category: 'Power Bank',
      price: 1350,
      availQuantity: 4,
      imageUrl: '../assets/images/product5.jpg',
    },
    {
      id: 15,
      name: 'Anker Soundbuds Rise',
      category: 'Bluetooth Headset',
      price: 2999,
      availQuantity: 0,
      imageUrl: '../assets/images/product3.jpg',
    },
    {
      id: 16,
      name: 'Apple Watch Series',
      category: 'Watch',
      price: 52940,
      availQuantity: 2,
      imageUrl: '../assets/images/product6.jpg',
    },
    {
      id: 17,
      name: 'IBall Slide Spirit X2',
      category: 'Tablets',
      price: 4999,
      availQuantity: 0,
      imageUrl: '../assets/images/product7.jpg',
    },
    {
      id: 18,
      name: 'Skullcandy Set 2.0 ',
      category: 'Headset',
      price: 2999,
      availQuantity: 25,
      imageUrl: '../assets/images/product8.jpg',
    },
  ];
}
