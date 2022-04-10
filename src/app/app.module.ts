import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RectangleComponent } from '../_components/rectangle.component';
import { RectanglebComponent } from 'src/_components/rectangle-b.component';
import { AuthentificationComponent } from 'src/_components/authentification.component';
import { PriceComponent } from './price/price.component';
@NgModule({
  declarations: [
    AppComponent,
    RectangleComponent,
    RectanglebComponent,
    AuthentificationComponent,
    PriceComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(router: Router) {}
}
