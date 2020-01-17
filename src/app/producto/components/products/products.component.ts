import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  // instanciamos la variable productsService para traer
  // la seccion que lee los datos de la API y asi usarlos
  // dentro de nuestro componente que usa un array de Products
  // para mostrarlo en su html
  constructor(private productsService: ProductsService) { }

  products: Product[] = [
    // Se eliminaros los datos de aca adentro
    // porque por comodidad estaba seteado un array de datos
    // para mostrar esos datos en nuestro this.products.component.html
  ];

  ngOnInit() {
    this.fetchProducts();
  }

  clickProduct(id: number) {
    console.log('Producto #');
    console.log(id);

  }
  // fecth = traer (in Spanish)
  fetchProducts() {
    this.productsService.getAllProducts()
    .subscribe(products => {
      this.products = products;
      console.log(products);
    });
  }
}
