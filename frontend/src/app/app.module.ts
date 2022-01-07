import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';


//INIT SERVICES
import { LoadScriptsService } from './services/load-scripts.service';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ShopComponent } from './components/shop/shop.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { CartComponent } from './components/cart/cart.component';
import { PreloaderComponent } from './components/singles/preloader/preloader.component';
import { SearchAreaComponent } from './components/singles/search-area/search-area.component';
import { LogoCarouselSectionComponent } from './components/singles/logo-carousel-section/logo-carousel-section.component';
import { FooterComponent } from './components/singles/footer/footer.component';
import { CopyrigthComponent } from './components/singles/copyrigth/copyrigth.component';
import { EnterGuard } from './guards/enter.guard';

//END SERVICES

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ShopComponent,
    CheckoutComponent,
    SingleProductComponent,
    CartComponent,
    PreloaderComponent,
    SearchAreaComponent,
    LogoCarouselSectionComponent,
    FooterComponent,
    CopyrigthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    LoadScriptsService,
    EnterGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
