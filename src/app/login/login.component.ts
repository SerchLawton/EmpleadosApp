import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private httplient:HttpClient, private loginService:LoginServiceService){
    
  }

  login(formulario:NgForm){
    const email=formulario.value.email
    const password=formulario.value.password
    this.loginService.login(email,password);
  }
}
