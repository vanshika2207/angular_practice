import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HelppageComponent } from './helppage/helppage.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'help',
        component: HelppageComponent,
      },
    ],
  },
  { path: 'info', component: InfoComponent },
  { path: 'info/:id/:name', component: InfoComponent },
  { path: 'contactme', component: ContactmeComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
