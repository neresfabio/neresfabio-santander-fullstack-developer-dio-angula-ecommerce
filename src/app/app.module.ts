import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { MyEcommerceComponent } from './components/my-ecommerce/my-ecommerce.component';
import { FiltersComponent } from './components/my-ecommerce/filters/filters.component';
import { ProductListComponent } from './components/my-ecommerce/product-list/product-list.component';
import { BooksService } from './components/my-ecommerce/product-list/product-list.component.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductItemComponent } from './components/my-ecommerce/product-list/product-item/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    MyEcommerceComponent,
    FiltersComponent,
    ProductListComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
