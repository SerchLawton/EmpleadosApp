import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { LoginServiceService } from "../login-service.service";
import { Injectable } from "@angular/core";

@Injectable()
export class LoginGuardian implements CanActivate{

    constructor(private login:LoginServiceService,private router:Router){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(this.login.getCookie()){
            return true //Esta logueado el usuario
        }
        else{
            this.router.navigate(["login"])
            return false //No esta logueado el usuario
        }
    }
}