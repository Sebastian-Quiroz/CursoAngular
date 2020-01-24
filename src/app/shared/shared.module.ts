import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Quitados de app.module

import { ExponentialPipePipe } from './pipes/exponential/exponential-pipe.pipe';
import { HighlightDirective } from './directive/highlight/highlight.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';

import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ExponentialPipePipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
    CartComponent
  ],
  exports: [
    ExponentialPipePipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    // Implementar formularios reactivos
    ReactiveFormsModule,
    // permite usar routerLink
    RouterModule,
    // Importa el modulo creado para AngularMaterial
    MaterialModule
  ]
})
export class SharedModule { }
