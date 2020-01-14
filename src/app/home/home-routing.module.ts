// Nuevas rutas para el Modulo Home y sus componentes
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

// Variable tipo Array de rutas
const routes: Routes = [
    {
        path: '',
        component: HomeComponent
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
export class HomeRoutingModule {}
