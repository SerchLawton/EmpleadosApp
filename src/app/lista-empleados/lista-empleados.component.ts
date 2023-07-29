import { Component, Input } from '@angular/core';
import { Empleado } from '../empleado/empleado.component';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent {

  @Input() empleadoLista:Empleado
  @Input() indice:number

  ArrCaracteristicas=[""]

  constructor(private miServicio:ServicioEmpleadosService){
    //Se define el constructor para definir el servicio
  }

  agregarCaracteristicaArray(caracteristica:string){
    this.miServicio.mostrarMensaje(caracteristica) //Ejecutar funcion del servicio
    this.ArrCaracteristicas.push(caracteristica)  //Agregar caract al arreglo
  }


}
