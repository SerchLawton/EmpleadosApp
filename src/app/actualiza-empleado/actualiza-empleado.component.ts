import { Component } from '@angular/core';
import { Empleado } from '../empleado/empleado.component';
import { EmpleadoService } from '../empleado.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { GuardarEmpleadoService } from '../guardar-empleado.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-actualiza-empleado',
  templateUrl: './actualiza-empleado.component.html',
  styleUrls: ['./actualiza-empleado.component.css']
})

export class ActualizaEmpleadoComponent {

  empleado:Empleado;
  indice:number;
  cuadroNombre="";
  cuadroApellido=""
  cuadroCargo=""
  cuadroSalario=0
  accion:number;

  constructor(private empleadoService:EmpleadoService,
              private router:Router,
              private route:ActivatedRoute, //Para recibir parametros
              private dbService:GuardarEmpleadoService
              ){
    this.indice=route.snapshot.params["id"] //Recupera el parametro indice de la URL
    this.empleado=this.empleadoService.getEmpleado(this.indice) //Consultar empleado

    this.cuadroNombre=this.empleado.nombre;
    this.cuadroApellido=this.empleado.apellido;
    this.cuadroCargo=this.empleado.cargo;
    this.cuadroSalario=this.empleado.salario;

    this.accion=route.snapshot.queryParams["accion"]
  }


  actualizarEmpleado(){
    if(this.accion==1)
    {
      let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario)
      this.empleadoService.setEmpleado(this.indice,miEmpleado)  
      this.dbService.actualizarEmpleado(this.indice,miEmpleado)
    }
    else if(this.accion==2)
    {
      this.empleadoService.deleteEmpleado(this.indice)
    }
    setTimeout(()=> //Esperar 0.2 segundos para que la BD se actualice
    {
      this.router.navigate([""])  //Vuelve al home
    },
     300)
    
 }
/*
 eliminarEmpleado(){
 
  this.router.navigate([""])  //Vuelve al home
}*/
}
