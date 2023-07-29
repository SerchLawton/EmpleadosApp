import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado/empleado.component';
import { LoginServiceService } from './login-service.service';

@Injectable({
  providedIn: 'root'
})
export class GuardarEmpleadoService {

  constructor(private httpClient:HttpClient, private loginService:LoginServiceService)
   //Se inyecta el modulo HttpClient 
   {
   
  } 
  token=this.loginService.getCookie() //Cargar token desde la cookie
  
  //Direccion de la BD concatenada con el token
  URL_BD="https://misclientes-f392e-default-rtdb.firebaseio.com/datos.json?auth="+this.token

  cargarEmpleadosBD(){
    //Cargar observable de la BD
    //Concatenar el token en la URL para el acceso
    return this.httpClient.get(this.URL_BD)
  }

  registrarEmpleadoBD(empleados:Empleado[]){
    //Se manda la informacion a la URL de la BD con el metodo post/put y un observable
    this.httpClient.put(this.URL_BD,empleados).subscribe(
      response=>console.log("Se han registrado los empleados: "+response),
      error=>console.log("Error: "+error),
    );
  }

  actualizarEmpleado(indice:number,empleados:Empleado){
    //Se manda la informacion a la URL de la BD con el metodo put y un observable
    this.httpClient.put("https://misclientes-f392e-default-rtdb.firebaseio.com/datos/"+indice+".json?auth="+this.token,empleados).subscribe(
      response=>console.log("Se ha actualizado el registro: "+response),
      error=>console.log("Error: "+error),
    );
  }

  eliminarEmpleado(indice:number){
    //Se manda la informacion a la URL de la BD con el metodo put y un observable
    this.httpClient.delete("https://misclientes-f392e-default-rtdb.firebaseio.com/datos/"+indice+".json?auth="+this.token).subscribe(
      response=>console.log("Se ha eliminado el registro: "+response),
      error=>console.log("Error: "+error),
    );
  }
}
