import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-caracteristicas',
  templateUrl: './caracteristicas.component.html',
  styleUrls: ['./caracteristicas.component.css']
})
export class CaracteristicasComponent {
  @Output() caracteristicaEmpleado=new EventEmitter<string>() //Decorador Output

  agregarCaracteristica(caracteristica:string){
    this.caracteristicaEmpleado.emit(caracteristica) //Cambiar valor
  }
}
