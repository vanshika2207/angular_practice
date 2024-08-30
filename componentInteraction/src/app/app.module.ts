import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { DirectiveComponentComponent } from './directive-component/directive-component.component';
import { BasicHighlightDirective } from './basic-highlight.directive';
import { UpperCasePipe } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    DirectiveComponentComponent,
    BasicHighlightDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    UpperCasePipe,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
