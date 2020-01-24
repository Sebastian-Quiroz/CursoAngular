import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './componets/product-form/product-form.component';
/* Estos fueron generados por ng generate @angular/material:address-form
pero se cortaran y se pegaran en nuestro modulo ya creado
que contiene todo el tema de MateriaAngular

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';

*/
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { NavComponent } from './componets/nav/nav.component';


import { TableComponent } from './componets/table/table.component';
import { DashboardComponent } from './componets/dashboard/dashboard.component';
import { ProductsListComponent } from './componets/products-list/products-list.component';
import { FormProductComponent } from './componets/form-product/form-product.component';
import { ProductEditComponent } from './componets/product-edit/product-edit.component';

@NgModule({
  declarations: [
    ProductFormComponent,
    NavComponent,
    TableComponent,
    DashboardComponent,
    ProductsListComponent,
    FormProductComponent,
    ProductEditComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    // Importamos materialModule para usar todo el ModuloMaterial
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AdminModule {}
