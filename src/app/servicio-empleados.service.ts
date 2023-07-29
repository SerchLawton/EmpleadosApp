import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadosService {

  constructor() { }

  //Se define la funcion del servicio
  mostrarMensaje(mensaje:string){
    alert(mensaje)
  }
}
