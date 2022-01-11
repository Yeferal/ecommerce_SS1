import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product/product';
import { Cart } from 'src/app/models/shop/cart';
import { CartService } from 'src/app/services/shop/cart.service';
import { ProductService } from 'src/app/services/shop/product.service';
import { GLOBAL } from '../../services/global';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  formCart: FormGroup = new FormGroup({
    cantidad: new FormControl(null,null)
  });
  formCuantity = new FormControl(null,null);
  listForm: FormControl [] = [];

  listCart: Cart [] = [];
  listProducts: Product [] = [];
  subTotal: any;
  shipping: any = 35;
  total: any = 0;
  readonly URL_API = GLOBAL.URL2;

  constructor(private productService: ProductService,
    private cartService: CartService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAll();
  }

  updateCartProduct(event: any){
    console.log(this.listForm[event].value);
    const data = {
      id: this.listProducts[event].id_producto,
      cantidad: this.listForm[event].value
    }

    this.cartService.updateCartOneProduct(data).subscribe(
      res => {
        // console.log(res);
        this.getAll();
      },
      error => {
        console.log(error);
      }
    );
    // this.formCuantity.setValue(5);
    // console.log(this.formCuantity.value);
  }

  getTotalCart(){
    this.cartService.getTotalCart().subscribe(
      res => {
        // console.log(res);
        this.subTotal = res;
        this.total = this.shipping + this.subTotal;
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteOne(id: any){
    const data = this.listProducts[id].id_producto;
    this.cartService.deleteOneCart(data).subscribe(
      res => {
        console.log(res);
        this.getAll();
      },
      error => {
        console.log(error);
        
      }
    );
  }

  getAll(){
    this.cartService.getAllCart().subscribe(
      res => {
        // console.log(res);
        this.listCart = res;
        this.getProductsCart();
        for (let i = 0; i < this.listCart.length; i++) {
          this.listForm.push(new FormControl(this.listCart[i].cantidad,Validators.required));
        }
        this.getTotalCart();
        
        // console.log(this.listProducts);
        
      },
      error => {
        console.log(error);
        
      }
    );
  }

  getProductsCart(){
    this.listProducts = [];
    this.listCart.forEach(cartOne => {
      this.productService.getProduct(cartOne.id_producto).subscribe(
        res => {
          let pro: Product = res;
          this.listProducts.push(pro);
        },
        error => {
          console.log(error);
          
        }
      );
    });

  }

}
