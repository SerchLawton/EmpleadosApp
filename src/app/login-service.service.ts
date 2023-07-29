import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
//Agregar firebase para el login y authentication
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private router:Router, private cookieService:CookieService) { }

  token:string //Clave de acceso al usuario
  login(email:string,password:string)
  {
    //Se invoca al metodo y se crea la promesa
    firebase.auth().signInWithEmailAndPassword(email,password).then(
      response=>{ //Objeto de tipo response
        firebase.auth().currentUser?.getIdToken().then( //Segunda promesa
          token=>{
            this.token=token;
            this.cookieService.set("token",this.token,1); //Guardar cookie 
            this.router.navigate(['/'])
            }
        )
      }
    )
  };

  getToken(){
    return this.token;
  }



  getCookie(){
    return this.cookieService.get("token");
  }

  logout(){
    firebase.auth().signOut().then(()=>{
      this.token="";
      this.cookieService.delete("token") //Borrar cookie
      this.router.navigate(['/'])
    })
  }
}
