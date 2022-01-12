import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product/product';
import { LoadScriptsService } from 'src/app/services/load-scripts.service';
import { CartService } from 'src/app/services/shop/cart.service';
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

  constructor(private productService: ProductService,
    private cartService: CartService,
    private router: Router) { }

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

  addProductCart(pro: Product){
    const cart = {
      id_producto: pro.id_producto,
      cantidad: 1,
      precio_unitario: pro.precio_unitario
    }
    this.cartService.postAddProductCart(cart).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/cart']);
      },
      error => {
        console.log(error);
      }
    );
  }

}
