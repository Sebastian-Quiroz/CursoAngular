import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Importaciones adicionales para el proyecto
import { FormsModule } from '@angular/forms';

// Componente
import { ProductComponent } from './components/product.component';
@NgModule({
  declarations: [
    AppComponent,
    // Declaracion de componentes
    // creados para que Angular los reconozca
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Imports agregados a este proyecto
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
