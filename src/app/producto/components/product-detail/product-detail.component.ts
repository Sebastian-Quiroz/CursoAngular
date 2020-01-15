import { Component, OnInit } from '@angular/core';
// Importacion para obtener informacion de una ruta y objeto tipo Parametro
import { ActivatedRoute, Params } from '@angular/router';
// Importacion de servicios
import { Product } from 'src/app/product.model';
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
      const id = params.idProduct;
      console.log(id);
      this.product = this.productsService.getProduct(id);
      console.log(this.product);
    });
  }
}
