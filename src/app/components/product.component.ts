import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChanges,
    OnInit,
    OnDestroy,
} from '@angular/core';
import { Product } from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})
export class ProductComponent implements OnChanges, OnInit, OnDestroy {
   // Este componente indica que va a RECIBIR OTRA PROPIEDAD
   // desde otro componente (Componente PADRE a un componente HIJO)
    @Input() product: Product;

    // Se crea un evento que permita ENVIAR INFORMACION DESDE
    // UN COMPONENTE HIJO A UN PADRE
    // *Se debe incialiazar el objeto EventEmitter
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    constructor() {
        console.log('1. constructor');
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('2. ngOnChanges');
        console.log(changes);
    }
    ngOnInit(): void {
        console.log('3. ngOnInit');
    }
    /*
    ngOnChanges y ngDoCheck tienen un error de colisión,
    ya que los dos pueden cumplir la tarea de escuchar
    por cambios del componente.
    El primero es la forma nativa de Angular,
    el segundo es una forma customizada para ello.

    ngDoCheck(): void {
        console.log('4. ngDoCheck');
    }
    */
   /*
   ngOnDestroy nos ayudará remover las suscripciones a datos
   que inicializamos en algún momento, así podemos evitar
   bucles y fugas de memoria en la aplicación, es decir,
   limpiamos procesos de memoria siguiendo buenas prácticas.
   */
    ngOnDestroy(): void {
        console.log('5. ngOnDestroy');
    }

    // Funcion que tiene la logic de que se va a realizar
    addCart() {
        console.log('Añadir al carrito');
        this.productClicked.emit(this.product.id);
    }
}
