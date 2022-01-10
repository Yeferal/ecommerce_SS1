import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product/product';
import { ProductService } from 'src/app/services/shop/product.service';
import { GLOBAL } from '../../services/global';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {

  product: Product = new Product();
  readonly URL_API = GLOBAL.URL2;

  constructor(private productService: ProductService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    const id_product = this.route.snapshot.paramMap.get('id_product');
    // console.log(this.route.snapshot.paramMap);
    
    this.productService.getProduct(id_product).subscribe(
      res => {
        this.product = res;
        // console.log(res);
      },
      error => {
        console.log(error);
        
      }
    )
  }

  getProduct(){
    const id_product = this.route.snapshot.paramMap.get('id_producto');

    this.productService.getProduct(id_product).subscribe(
      res => {
        
        this.product = res;
        console.log(this.product);
      },
      error => {
        console.log(error);
        
      }
    )
  }

}
