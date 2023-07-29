import { Component, Input } from '@angular/core';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class Empleado {

  constructor(@Inject(String) nombre:string,@Inject(String)apellido:string,@Inject(String)cargo:string,@Inject(String)salario:number){
    this.nombre=nombre
    this.apellido=apellido
    this.cargo=cargo
    this.salario=salario
  }

  
    //Atributos del empleado
    nombre:string
    apellido:string
    cargo:string
    salario:number
}
