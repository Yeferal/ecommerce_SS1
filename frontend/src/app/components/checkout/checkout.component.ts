import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product/product';
import { Cart } from 'src/app/models/shop/cart';
import { User } from 'src/app/models/user/user';
import { BuyService } from 'src/app/services/shop/buy.service';
import { CartService } from 'src/app/services/shop/cart.service';
import { ProductService } from 'src/app/services/shop/product.service';
import { UserService } from 'src/app/services/user/user.service';
import { GLOBAL } from '../../services/global';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  formCart: FormGroup = new FormGroup({
    cantidad: new FormControl(null,null)
  });

  formOrder: FormGroup = new FormGroup({
    nombres: new FormControl(null,Validators.required),
    apellidos: new FormControl(null,Validators.required),
    correo: new FormControl(null,[Validators.required, Validators.email]),
    direccion: new FormControl(null,Validators.required),
    telefono: new FormControl(null,Validators.required),
    no_tarjeta:new FormControl(null,Validators.required)
  });
  formCuantity = new FormControl(null,null);
  listForm: FormControl [] = [];

  listCart: Cart [] = [];
  listProducts: Product [] = [];
  subTotal: any;
  shipping: any = 35;
  total: any = 0;
  userLogged: User = new User();
  message: string = '';
  readonly URL_API = GLOBAL.URL2;

  constructor(private productService: ProductService,
    private cartService: CartService,
    private userService: UserService,
    private buyService: BuyService, 
    private router: Router,) { }

  ngOnInit(): void {
    this.getAll();
    this.getUser();
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

  getUser(){
    this.userService.getUserLogger().subscribe(
      res =>{
        console.log(res);
        this.userLogged = res;
        this.formOrder.get('nombres')?.setValue(this.userLogged.nombres);
        this.formOrder.get('apellidos')?.setValue(this.userLogged.apellidos);
        this.formOrder.get('telefono')?.setValue(this.userLogged.telefono);
        this.formOrder.get('correo')?.setValue(this.userLogged.correo);
      },
      error => {
        console.log(error);
        
      }
    )
  }

  genOrder(){
    // console.log(this.formOrder.value);
    if (this.formOrder.invalid) {
      this.message = 'Debe de llenar todos los campor correctamente';
      return ;
    }
    this.message = '';
    this.buyService.genOrder(this.formOrder.value).subscribe(
      res => {
        console.log(res);
        
        window.location.reload()
      },
      error => {
        console.log(error);
        
      }
    );
    
  }

}
