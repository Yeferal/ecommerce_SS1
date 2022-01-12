import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GLOBAL } from '../global';

@Injectable({
  providedIn: 'root'
})
export class BuyService {

  readonly URL_API = GLOBAL.URL;

  constructor(private http: HttpClient, private router: Router) { }

  genOrder(data: any){
    return this.http.post<any>(GLOBAL.URL+'/buy',data, {
      withCredentials: true
    });
  }
}
