import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product/product';
import { CartService } from 'src/app/services/shop/cart.service';
import { ProductService } from 'src/app/services/shop/product.service';
import { GLOBAL } from '../../services/global';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {

  formSingle: FormGroup = new FormGroup({
    cantidad: new FormControl(0,Validators.required)
  });

  product: Product = new Product();
  readonly URL_API = GLOBAL.URL2;

  constructor(private productService: ProductService, 
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router) { }

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

  addCartProduct(){
    console.log(this.formSingle.value);
    const id_prod = this.route.snapshot.paramMap.get('id_producto');
    const cart = {
      id_producto: this.product.id_producto,
      cantidad: this.formSingle.get('cantidad')?.value,
      precio_unitario: this.product.precio_unitario
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
