import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Importaciones adicionales para el proyecto
import { FormsModule } from '@angular/forms';

// Componentes
import { ProductComponent } from './product/components/product/product.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';

// Importado un modulo que sera compartido por otros modulos
import { SharedModule } from './shared/shared.module';
// Modulo que sera un core
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    // Declaracion de componentes
    // creados para que Angular los reconozca
    ProductComponent,
    CartComponent,
    ProductsComponent,
    ContactComponent,
    DemoComponent,
    PageNotFoundComponent,
    ProductDetailComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Imports agregados a este proyecto
    FormsModule,
    // Modulo con componentes compartidos
    SharedModule,
    // ModuloCore
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
