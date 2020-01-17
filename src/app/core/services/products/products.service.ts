import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';

// Importacion de HttpClient Que nos permitira conectarnos con el
// modulo HttpClientModule que se configuro en el app.module.ts
import { HttpClient } from '@angular/common/http';

// Aca se encuentra configurado la ruta de nuestra API ya que por buena practica
// se debe tener una variable que contenga la URL y asi se pueda reutilizar
import { environment } from 'src/environments/environment';

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
    return this.http.get<Product[]>(`${environment.url_api}/products/`);
  }

  // Retorna el producto que coincida con el id
  getProduct(id: string) {
    // return this.products.find(item => id === item.id);

    // Realiza la peticion GET concatenando el ID que reciba y adicional el metodo get
    // ya tipa el dato que pretende recibir
    return this.http.get<Product>(`${environment.url_api}/products/${id}`);
  }

  // Uso de la peticion POST
  createProduct(product: Product) {
    // Las peticiones POST tienen un PATH y un BODY
    return this.http.post(`${environment.url_api}/products/`, product);
  }

  // Uso de la peticion PUT
  updateProduct(id: string, changes: Partial<Product>) {
    // La peticion put necesita dos partes, su PATH y los cambios que se haran a la info de ese PATH
    // Se usa la 'PARCIAL<>' para nos permita usar una parte del objeto que recibe
    return this.http.put(`${environment.url_api}/products/${id}`, changes);
  }

  // Uso peticion DELETE
  deleteProduct(id: string) {
    return this.http.delete(`${environment.url_api}/products/${id}`);
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
