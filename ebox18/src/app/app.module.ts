import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListHttpComponent } from './book-list-http/book-list-http.component';
import { HttpClientModule } from '@angular/common/http';
import { LibraryService } from '../assets/services/library.service';

@NgModule({
  declarations: [AppComponent, BookListHttpComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [LibraryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
