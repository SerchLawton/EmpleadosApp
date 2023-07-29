import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado/empleado.component';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  titulo = 'Proyecto';



  cuadroNombre=""
  cuadroApellido=""
  cuadroCargo=""
  cuadroSalario=0

  empleados:Empleado[]=[]

  constructor(private empleadoService:EmpleadoService,private router:Router){

  }

  registrarEmpleado(){
    let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario)
    this.empleadoService.agregarEmpleadoServicio(miEmpleado)
    this.router.navigate([""])  //Vuelve al home
 }
}
