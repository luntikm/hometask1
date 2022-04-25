import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from 'src/_components/authentification.component';
import { PriceComponent } from './price/price.component';
import { RectangleComponent } from 'src/_components/rectangle.component';
import { RectanglebComponent } from 'src/_components/rectangle-b.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'price', component: PriceComponent },
  { path: 'auth', component: AuthentificationComponent },
  { path: 'rectangle', component: RectangleComponent },
  { path: 'bootstraprectangle', component: RectanglebComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
