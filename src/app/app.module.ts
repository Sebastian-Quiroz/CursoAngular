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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Modulo para hacer peticiones HTTP (HttpClientModule))
// MUYYY IMPORTANTE PARA CONECTARSE A UNA REST API
// El HTTP-CLIENT debe importarse en el servicio que va hacer el llamado
import { HttpClientModule } from '@angular/common/http';


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
    CoreModule,
    BrowserAnimationsModule,
    // Modulo que permite hacer peticones HTTP
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
