import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GLOBAL } from '../global';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }

  getUserLogger(){
    return this.http.get<any>(GLOBAL.URL+'/logged',{
      withCredentials: true
    })
  }

}
