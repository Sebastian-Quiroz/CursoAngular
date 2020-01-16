import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importacions de ANGULAR MATERIAL
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule
  ],
  // Modulos que pueden usar otros
  exports: [
    // Material ButtonBasic
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule
  ]
})
// Cualquier Modulo que quiera Usar
// Angular Materias debera importar o llamar
// este modulo
export class MaterialModule { }
