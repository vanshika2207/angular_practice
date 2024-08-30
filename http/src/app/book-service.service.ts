import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBook } from '../book';
@Injectable({
  providedIn: 'root',
})
export class BookServiceService {
  constructor(private http: HttpClient) {}
  url = 'assets/books.json';
  ngOnInit() {}
  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.url);
  }
  postBooks(
    author: string,
    country: string,
    imageLink: string,
    language: string,
    link: string,
    pages: number,
    title: string,
    year: number
  ): Observable<IBook> {
    const postdata: IBook = {
      author: author,
      country: country,
      imageLink: imageLink,
      language: language,
      link: link,
      pages: pages,
      title: title,
      year: year,
    };
    return this.http.post<IBook>(this.url, postdata);
  }
  deleteBooks(): Observable<IBook[]> {
    return this.http.delete<IBook[]>(this.url);
  }
}
