import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {server} from '../server';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AboutComponent } from './about/about.component';
import { CarouselComponent } from './accueil/carousel/carousel.component';
import { CardsComponent } from './accueil/cards/cards.component';


// import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AddProductComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    AccueilComponent,
    AboutComponent,
    CarouselComponent,
    CardsComponent,
  

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
