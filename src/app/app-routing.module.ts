import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Rutas de los componentes para enlazar con su respectivo path
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Se agrega cada una de las rutas con su respectivo componente
const routes: Routes = [
  {
    // Ruta cuando no se especifica ruta exacta
    // redirecciona a /home.
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    // El simbolo '/' NO DE DEBE PONER '/home'
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    // Pagina 404, por si el usuario ingresa una ruta no existente
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
