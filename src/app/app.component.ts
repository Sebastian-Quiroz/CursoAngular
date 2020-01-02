import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  /*
  Si se desea ya que el app.component.html
  tiene una sola linea con una etiqueta
  NO HAY NECESIDAD DE LLAMAR TODO EL ARCHIVO
  SI NO UNICAMENTE UN TEMPLATE:
  template: ´<router-outlet></router-outlet>',
   */
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
