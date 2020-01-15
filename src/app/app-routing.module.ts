import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// Rutas de los componentes para enlazar con su respectivo path
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/components/demo/demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent} from './product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';

// Importacion de guardian creado
import { AdminGuard } from './admin.guard';

// Se agrega cada una de las rutas con su respectivo componente
const routes: Routes = [
  {
    // Ruta 'Principal', que anida rutas hijas
    // Esta ruta contiene el componente que creamos como Plantilla
    path: '',
    component: LayoutComponent,
    children: [
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
        // component: HomeComponent --> Ruta antes de volver Home un Modulo
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'products/:idProduct',
        component: ProductDetailComponent
      },
      {
        path: 'contact',
        // Asignacion de un guardian ya creado
        canActivate: [AdminGuard],
        component: ContactComponent
      }
    ]
  },
  {
    path: 'demo',
    // component: DemoComponent
    loadChildren: () => import ('./demo/demo.module').then(m => m.DemoModule)
  },
  {
    // Pagina 404, por si el usuario ingresa una ruta no existente
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // Seleccionamos que Dinamicamente escoja una Opcion de PREGARGA
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
