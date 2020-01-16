import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// Rutas de los componentes para enlazar con su respectivo path
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
        // component: ProductsComponent
        loadChildren: () =>
          import('./producto/product.module').then(m => m.ProductoModule)
      },
      {
        path: 'contact',
        // Asignacion de un guardian ya creado
        canActivate: [AdminGuard],
        // component: ContactComponent
        loadChildren: () =>
          import('./contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'demo',
        // component: DemoComponent
        loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
      }
    ]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  // Esta ruta debe ir siempre al final como ultima opcion
  {
    // Pagina 404, por si el usuario ingresa una ruta no existente
    path: '**',
    // component: PageNotFoundComponent
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then(
        m => m.PageNotFoundModule
      )
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // Seleccionamos que Dinamicamente escoja una Opcion de PREGARGA
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
