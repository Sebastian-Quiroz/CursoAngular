// Nuevas rutas para el Modulo Home y sus componentes
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './components/demo/demo.component';

// Variable tipo Array de rutas
const routes: Routes = [
    {
        // Para ingresar aca debe ser /demo/demoss
        path: 'demoss',
        component: DemoComponent
    }
];

@NgModule({
    // Importa un array de Rutas
    imports: [
        RouterModule.forChild(routes)
    ],
    // Al ser exportable permite que otros modulos
    // lo puedan utilizar
    exports: [
        RouterModule
    ]
})
export class DemoRoutingModule {}
