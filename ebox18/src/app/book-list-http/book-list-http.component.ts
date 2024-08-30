import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../../assets/services/library.service';
import { IBook } from '../book-interface';
@Component({
  selector: 'app-book-list-http',
  templateUrl: './book-list-http.component.html',
  styleUrls: ['./book-list-http.component.css'],
})
export class BookListHttpComponent implements OnInit {
  //FIll your code here
  constructor(private service: LibraryService) {}
  detail: IBook[] = [];
  ngOnInit(): void {
    this.service.getBooks().subscribe((response) => {
      this.detail = response;
      console.log(this.detail);
    });
  }
}
