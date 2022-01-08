import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ShopComponent } from './components/shop/shop.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { EnterGuard } from './guards/enter.guard';
import { LogoutGuard } from './guards/logout.guard';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path: 'register', component: RegisterComponent, canActivate: [EnterGuard]},
  {path: 'login', component: LoginComponent, canActivate: [EnterGuard]},
  {path: 'home', component: HomeComponent, canActivate: [LogoutGuard]},
  {path: 'about', component: AboutComponent, canActivate: [LogoutGuard]},
  {path: 'contact', component: ContactComponent, canActivate: [LogoutGuard]},
  {path: 'shop', component: ShopComponent, canActivate: [LogoutGuard]},
  {path: 'checkout', component: CheckoutComponent, canActivate: [LogoutGuard]},
  {path: 'single-product', component: SingleProductComponent, canActivate: [LogoutGuard]},
  {path: 'cart', component: CartComponent, canActivate: [LogoutGuard]},
  // {path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
