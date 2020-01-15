import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Importaciones adicionales para el proyecto
import { FormsModule } from '@angular/forms';

// Componentes
import { LayoutComponent } from './layout/layout.component';

// Importado un modulo que sera compartido por otros modulos
import { SharedModule } from './shared/shared.module';
// Modulo que sera un core
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    // Declaracion de componentes
    // creados para que Angular los reconozca
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Imports agregados a este proyecto
    FormsModule,
    // Modulo con componentes compartidos
    SharedModule,
    // ModuloCore
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
