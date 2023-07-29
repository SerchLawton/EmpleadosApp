import { Injectable } from "@angular/core";
import { Empleado } from "./empleado/empleado.component";
import { ServicioEmpleadosService } from "./servicio-empleados.service";
import { GuardarEmpleadoService } from "./guardar-empleado.service";

@Injectable()
export class EmpleadoService{

    constructor(private servicioMensaje:ServicioEmpleadosService, 
        private servicioBD:GuardarEmpleadoService){

    }

    empleados:Empleado[]=[]

    getEmpleado(indice:number){
        return this.empleados[indice]
    }

    setEmpleados(empleados:Empleado[]){
        this.empleados=empleados;
    }

    setEmpleado(indice:number,empleado:Empleado){
        this.empleados[indice]=empleado;
    }

    deleteEmpleado(indice:number){
        this.empleados.splice(indice,1)
        this.servicioBD.eliminarEmpleado(indice)
        if(this.empleados!=null) this.servicioBD.registrarEmpleadoBD(this.empleados)
       }

    agregarEmpleadoServicio(empleado:Empleado){
        this.servicioMensaje.mostrarMensaje("Se registro a "+empleado.nombre+
        "\nCon un salario de "+empleado.salario)
        this.empleados.push(empleado)   //Agregar empleado al arreglo
        this.servicioBD.registrarEmpleadoBD(this.empleados) //Se invoca el servicio para registrar los empleados en la BD
    }  
}