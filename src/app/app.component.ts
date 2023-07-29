import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app'
import { LoginServiceService } from './login-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(private loginService:LoginServiceService){

  }

  ngOnInit(): void{
    firebase.initializeApp({
      apiKey: "AIzaSyBDzo4NjFiKuSc5mvydQktg9tjNqv-vKD4",
      authDomain: "misclientes-f392e.firebaseapp.com",
    })
  }

  estaLogueado(){
    return this.loginService.getCookie()
  }
 
  logout(){
    this.loginService.logout();
  }

}
