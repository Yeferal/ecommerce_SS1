import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/user/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    user: new FormControl(null,Validators.required),
    password: new FormControl(null,Validators.required),
  });

  msj: string = '';
  errorMsj: boolean = false;

  constructor(private sessionService: SessionService, private router: Router) { }

  ngOnInit(): void {
  }

  login(loginForm: FormGroup){
    if(loginForm.invalid){
      console.log(loginForm.invalid);
      this.msj = "Debe llenar todos los campos"
      this.errorMsj = true
      return ;
    }
    this.errorMsj = false
    this.sessionService.postLogin(loginForm.value).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['home']);
      },
      error => {
        console.log(error);
        this.msj = error.error.message;
        this.errorMsj = true
      }
    );
  }

}
