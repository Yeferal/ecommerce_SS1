import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { GLOBAL } from '../global';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  readonly URL_API = GLOBAL.URL;

  constructor(private http: HttpClient, private router: Router) { }


  postSignUp(data: any){
    return this.http.post<any>(this.URL_API+'/signup', data,{
      withCredentials:true
    });
  }

  postLogin(data: any){
    return this.http.post<any>(this.URL_API+'/login', data,{
      withCredentials:true
    });
  }

  logout(){
    return this.http.get<any>(this.URL_API+'/logout',{
      withCredentials: true
    });
  }

  // isLogged(){
  //   return this.http.get<any>(this.URL_API+'/isLogged',{
  //     withCredentials:true
  //   });
  // }
}
