import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Quitados de app.module

import { ExponentialPipePipe } from './pipes/exponential/exponential-pipe.pipe';
import { HighlightDirective } from './directive/highlight/highlight.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
<<<<<<< HEAD
import { MaterialModule } from '../material/material.module';
=======
>>>>>>> 1f105c0afa8852824dd292152154132ca028bfb3


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
    // permite usar routerLink
    RouterModule,
    // Importa el modulo creado para AngularMaterial
    MaterialModule
  ]
})
export class SharedModule { }
