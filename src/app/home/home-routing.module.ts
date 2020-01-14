// Nuevas rutas para el Modulo Home y sus componentes
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Variable tipo Array de rutas
const routes: Routes = [

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
export class HomeRoutingModule {}