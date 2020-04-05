import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];

  // se necesita crear un array con el nombre de las columnas
  // es bligatorio para usar Table de AngularMaterial
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.fecthProducts();
  }

  fecthProducts() {
    this.productsService.getAllProducts()
    .subscribe(
      products => {
        this.products = products;
      }
    );
  }

  deleteProduct(id: string) {
    this.productsService.deleteProduct(id)
    .subscribe( rta => {
      console.log(rta);
      this.fecthProducts();
      }
    );
  }
}