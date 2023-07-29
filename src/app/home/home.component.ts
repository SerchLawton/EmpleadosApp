import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado/empleado.component';
import { EmpleadoService } from '../empleado.service';
import { GuardarEmpleadoService } from '../guardar-empleado.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  titulo = 'Registro de empleado';

  cuadroNombre=""
  cuadroApellido=""
  cuadroCargo=""
  cuadroSalario=0

  empleados:Empleado[]=[]
  constructor(private empleadoService:EmpleadoService,private servicioBD:GuardarEmpleadoService){
      //Se define el constructor para definir el servicio
       this.empleados=empleadoService.empleados //Inicializar arreglo con el servicio
       this.servicioBD.cargarEmpleadosBD().subscribe(misEmpleados=>{
          console.log(misEmpleados) //Imprimir en consola los datos del observable
          this.empleados=Object.values(misEmpleados) //Cargar valores del observable
          this.empleadoService.setEmpleados(this.empleados)
       })
  }


  
  //Metodo abstracto
  ngOnInit(): void {
    //this.empleados=this.empleadoService.empleados //Alternativa para inicializar arreglo

  }


  registrarEmpleado(){
    let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario)
    this.empleadoService.agregarEmpleadoServicio(miEmpleado)
 }
}
