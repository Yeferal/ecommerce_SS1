import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GLOBAL } from '../global';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly URL_API = GLOBAL.URL;

  constructor(private http: HttpClient, private router: Router) { }


  getProduct(id_product: any){
    return this.http.get<any>(this.URL_API+'/product/'+id_product,{
      withCredentials: true
    })
  }

  getProducts(){
    return this.http.get<any>(this.URL_API+'/products',{
      withCredentials: true
    })
  }

  // putProductImg(data: any){
  //   return this.http.get<any>(this.URL_API+'',{
  //     withCredentials: true
  //   })
  // }

}
