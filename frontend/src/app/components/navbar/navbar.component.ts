import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/user/session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private sessionService: SessionService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.sessionService.logout().subscribe(
      res => {
        console.log(res);
        
        this.router.navigate(['login']);
      },
      err => {
        console.log(err);
        
      }
    );

  }

}
