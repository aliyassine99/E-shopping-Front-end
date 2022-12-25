import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './product/products-list/products-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { Route, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './exceptions/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product/products-list/product-detail/product-detail.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { CartStatusComponent } from './header/cart-status/cart-status.component';
import { CartDetailComponentComponent } from './cart/cart-detail-component/cart-detail-component.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Route[] = [
  {path: "search/:keyword", component: ProductsListComponent},
  {path: "category/:id", component: ProductsListComponent},
  {path: "products", component: ProductsListComponent},
  {path: "products/:id", component: ProductDetailComponent},
  {path : "cart", component: CartDetailComponentComponent},
  {path: "checkout", component: CheckoutComponent},
  {path: "", redirectTo:"/products", pathMatch: "full"},
  {path: "**", component: PageNotFoundComponent, pathMatch: "full"},

];

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    SidebarComponent,
    HeaderComponent,
    ProductDetailComponent,
    CartStatusComponent,
    CartDetailComponentComponent,
    CheckoutComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule, FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
