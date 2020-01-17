import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';
// Importacion de HttpClient Que nos permitira conectarnos con el
// modulo HttpClientModule que se configuro en el app.module.ts
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  // Retorna todo el array de productos
  getAllProducts() {
    // return this.products; ASI ESTABA CUANDO SE TENIA LA LISTA DE PRODUCTOS DECLARADA ACA

    // Mediante la variable http creada, se usa su metodo GET para hacer un llamado
    // de datos a la URL que contiene los datos de esa API
    // Al Metodo GET se le puede decir que tipo de PARAMETRO VA A RESOLVER, en este caso un Array Products
    return this.http.get<Product[]>('https://platzi-store.herokuapp.com/products/');
  }

  // Retorna el producto que coincida con el id
  getProduct(id: string) {
    // return this.products.find(item => id === item.id);
    return this.http.get(`https://platzi-store.herokuapp.com/products/${id}`);
  }

/*
  De esta manera anteriormente se llamaban los dato
  para mostrarlos en la pagina

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/images/pin.png',
      title: 'Pin',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/images/stickers1.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/images/stickers2.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    }
  ];
*/

}
