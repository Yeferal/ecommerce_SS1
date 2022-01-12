import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/user/session.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signUpForm = new FormGroup({
    nombres: new FormControl(null,Validators.required),
    apellidos: new FormControl(null,Validators.required),
    user: new FormControl(null,Validators.required),
    password: new FormControl(null,Validators.required),
    id_cuenta: new FormControl(null,Validators.required),
    fecha_nacimiento: new FormControl(null,Validators.required),
    telefono: new FormControl(null,Validators.required),
    correo: new FormControl(null,[Validators.email,Validators.required])
  });

  message: string = '';

  constructor(private sessionService: SessionService, private router: Router) { }

  ngOnInit(): void {
  }

  signUp(signUpForm: FormGroup){
    if(signUpForm.invalid){
      this.message = 'Debe de llenar todos los campos'
      return ;
    }
    this.message = '';
    // console.log(signUpForm.value);
    
    this.sessionService.postSignUp(signUpForm.value).subscribe(
      res => {
        // console.log(res);
        if (res.result) {
          this.router.navigate(['/home']);
        } else {
          this.message = res.message;
        }
        
      },
      error => {
        console.log(error);
        this.message = 'Ocurrio un error al intenter crear la cuenta';
      }
    );



    
  }

  


}
