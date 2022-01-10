import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product/product';
import { LoadScriptsService } from 'src/app/services/load-scripts.service';
import { ProductService } from 'src/app/services/shop/product.service';
import { GLOBAL } from '../../services/global';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  readonly URL_API = GLOBAL.URL2;
  listProducts: Product [] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe(
      res => {
        
        this.listProducts = res;
        console.log(this.listProducts);
      },
      error => {
        console.log(error);
        
      }
    )
  }

}
