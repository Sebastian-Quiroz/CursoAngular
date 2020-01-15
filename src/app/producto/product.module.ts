import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './components/product/product.component';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.model';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';

// Importacion del Modulo que maneja a ANGULAR MATERIAL
import { MaterialModule } from './../material/material.module';

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutingModule,
    // Llamado a MATERIAL MODULE
    MaterialModule
  ]
})
export class ProductoModule { }
