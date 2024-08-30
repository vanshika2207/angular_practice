import { Component } from '@angular/core';
import { BookServiceService } from './book-service.service';
import { IBook } from '../book';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'http';
  constructor(private service: BookServiceService) {}
  books: IBook[] = [];
  myForm: FormGroup;
  ngOnInit() {
    this.service.getBooks().subscribe((response) => {
      this.books = response;
      console.log(this.books);
    });
    this.myForm = new FormGroup({
      author: new FormControl(null),
      country: new FormControl(null),
      imageLink: new FormControl(null),
      language: new FormControl(null),
      link: new FormControl(null),
      pages: new FormControl(null),
      title: new FormControl(null),
      year: new FormControl(null),
    });
  }
  deleteBooks() {
    this.service.deleteBooks().subscribe(() => {
      this.books = [];
    });
  }
  post() {
    const author = this.myForm.get('author').value;
    const country = this.myForm.get('country').value;
    const imageLink = this.myForm.get('imageLink').value;
    const language = this.myForm.get('language').value;
    const link = this.myForm.get('link').value;
    const pages = this.myForm.get('pages').value;
    const title = this.myForm.get('title').value;
    const year = this.myForm.get('year').value;
    this.service
      .postBooks(author, country, imageLink, language, link, pages, title, year)
      .subscribe((response) => {
        console.log(response);
        this.books.push(response);
      });
  }
}
