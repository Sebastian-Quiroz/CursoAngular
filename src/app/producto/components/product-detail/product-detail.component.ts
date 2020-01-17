import { Component, OnInit } from '@angular/core';
// Importacion para obtener informacion de una ruta y objeto tipo Parametro
import { ActivatedRoute, Params } from '@angular/router';
// Importacion de servicios
import { Product } from 'src/app/core/models/product.model';
import { ProductsService } from 'src/app/core/services/products/products.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    // Se crea un metodo que permite recibir los parametros
    // que tiene la ruta (se recibe un dato tipo Params)
    this.route.params.subscribe((params: Params) => {
      // guarda el id que llego del objeto parametro
      // recordar que 'idProduct' se definio en la rutas
      // 'products/:idProduct'
      // y se obtiene exactamente el nombre que se le asigno
      const id = params.id;
      console.log(id);
      this.fetchProduct(id);
      // this.product = this.productsService.getProduct(id);
      // console.log(this.product);
    });
  }

  fetchProduct(id: string) {
    this.productsService.getProduct(id)
    .subscribe(product => {
      console.log(product);
      this.product = product;
    });
  }

  createProduct() {

    const newProduct: Product = {
      id: '20',
      image: 'ASAS',
      title: 'ProductoDesdePost',
      price: 101010,
      description: 'Producto Creado desde una peticion POST'
    };

    this.productsService.createProduct(newProduct)
    .subscribe(product => {
      console.log(product);
    });
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      image: 'asdfghjklñ',
      title: 'Modificacion PUT'
    };

    this.productsService.updateProduct('2', updateProduct)
    .subscribe(product => {
      console.log(product);
    });
  }

  deleteProduct() {
    const id = '7';
    this.productsService.deleteProduct(id)
    .subscribe();
  }
}
