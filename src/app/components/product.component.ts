import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})
export class ProductComponent {
   // Este componente indica que va a RECIBIR OTRA PROPIEDAD
   // desde otro componente (Componente PADRE a un componente HIJO)
    @Input() product: Product;

    // Se crea un evento que permita ENVIAR INFORMACION DESDE
    // UN COMPONENTE HIJO A UN PADRE
    // *Se debe incialiazar el objeto EventEmitter
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    // Funcion que tiene la logic de que se va a realizar
    addCart() {
        console.log('Añadir al carrito');
        this.productClicked.emit(this.product.id);
    }

}