import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  title = 'project-store';

  powerNum = 10;

  listNames = ['Sebastian', 'Quiroz', 'Adriana'];

  ngOnInit() {
  }

  addItem() {
    // El método push() añade uno o más elementos
    // al final de un array y devuelve la nueva longitud del array.
    this.listNames.push('nuevo item');
  }

  deleteItem(index: number) {
    // El método splice() cambia el contenido de un array
    // eliminando elementos existentes y/o agregando nuevos elementos.
    this.listNames.splice(index, 1);
  }

}
