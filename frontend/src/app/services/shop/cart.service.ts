import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GLOBAL } from '../global';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  readonly URL_API = GLOBAL.URL;

  constructor(private http: HttpClient, private router: Router) { }

  postAddProductCart(data: any){
    return this.http.post<any>(GLOBAL.URL+'/cart',data, {
      withCredentials: true
    });
  }

  getAllCart(){
    return this.http.get<any>(GLOBAL.URL+'/cartAll',{
      withCredentials: true
    });
  }

  getProductsCart(){

  }

  updateCartOneProduct(data: any){
    return this.http.put<any>(GLOBAL.URL+'/cart',data, {
      withCredentials: true
    });
  }

  getTotalCart(){
    return this.http.get<any>(GLOBAL.URL+'/totalCart',{
      withCredentials: true
    });
  }

  deleteOneCart(data: any){
    return this.http.delete<any>(GLOBAL.URL+'/cart/'+data,{
      withCredentials: true
    });
  }

}
