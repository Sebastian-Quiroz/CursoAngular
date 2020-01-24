import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductFormComponent } from './componets/product-form/product-form.component';
import { NavComponent } from './componets/nav/nav.component';
import { TableComponent } from './componets/table/table.component';
import { DashboardComponent } from './componets/dashboard/dashboard.component';
import { ProductsListComponent } from './componets/products-list/products-list.component';
import { FormProductComponent } from './componets/form-product/form-product.component';
import { ProductEditComponent } from './componets/product-edit/product-edit.component';


const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'create',
        component: ProductFormComponent
      },
      {
        path: 'table',
        component: TableComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'products',
        component: ProductsListComponent
      },
      {
        path: 'products/create',
        component: FormProductComponent
      },
      {
        path: 'products/edit/:id',
        component: ProductEditComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
