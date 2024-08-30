import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBook } from '../../app/book-interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  constructor(private http: HttpClient) {}
  url = 'assets/data/books.json';
  //FIll your code here
  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.url);
  }
}
