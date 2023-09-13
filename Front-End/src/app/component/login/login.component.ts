import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { LoginI } from 'src/app/modelo/login';
import { ActivatedRoute, Route } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  /* username: string = '';
  password: string= ''; */


  loginForm = new FormGroup({
    usuario: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required) 
  })
  
  
  constructor(private apiService: ApiService,
     private route:ActivatedRoute,
     private location:Location  ) {
    //this.login();
  }

  login(form:any) {
    this.apiService.OnLogin(form).subscribe(data => {
      console.log(data);
    })
    
  }

  redirigir(){
    //this.location.go(path:'notas',);
  }

}
