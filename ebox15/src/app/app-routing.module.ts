import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      //Fill your code
      { path: '', redirectTo: '/user', pathMatch: 'full' },
      { path: 'user', component: UserComponent },
      { path: 'product', component: ProductComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor() {}
}
