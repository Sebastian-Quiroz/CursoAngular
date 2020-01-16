import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importacions de ANGULAR MATERIAL
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule,
    // Generados por @angular/material:addres-form
    MatInputModule,
    MatSelectModule,
    MatRadioModule
  ],
  // Modulos que pueden usar otros
  exports: [
    // Material ButtonBasic
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule
  ]
})
// Cualquier Modulo que quiera usar
// Angular Materias debera importar o llamar
// este modulo
export class MaterialModule { }
