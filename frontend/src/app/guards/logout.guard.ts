import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/user/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LogoutGuard implements CanActivate {
  
  constructor(public auth: AuthService, public router: Router) {}

  canActivate(): boolean {
    this.auth.isAuthenticated().subscribe(
      res => {
        console.log(res);
        if (!res) {
          this.router.navigate(['login']);
          return false;
        }
        return true;
      },
      err => {
        console.log(err);
        return false;
      }
    );
    return true;
  }
  
}
