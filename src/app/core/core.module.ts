import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from './services/products/products.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    // servicio que quedo como core
    ProductsService
  ]
})
export class CoreModule { }
