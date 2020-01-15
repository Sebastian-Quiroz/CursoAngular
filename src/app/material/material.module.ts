import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importacions de ANGULAR MATERIAL
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  // Modulos que pueden usar otros
  exports: [
    // Material ButtonBasic
    MatButtonModule
  ]
})
// Cualquier Modulo que quiera Usar 
// Angular Materias debera importar o llamar
// este modulo
export class MaterialModule { }
