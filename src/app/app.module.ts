import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Empleado} from './empleado/empleado.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { CaracteristicasComponent } from './caracteristicas/caracteristicas.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadoService } from './empleado.service';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizaEmpleadoComponent} from './actualiza-empleado/actualiza-empleado.component';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { GuardarEmpleadoService } from './guardar-empleado.service';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component' //Conectar con servicio de BD
import { LoginServiceService } from './login-service.service';
import { CookieService } from 'ngx-cookie-service';
import { LoginGuardian } from './login/loginGuardian';


const appRoutes:Routes=[
  {path:"",component:HomeComponent},
  {path:"proyectos",component:ProyectosComponent},
  {path:"quienes-somos",component:QuienesSomosComponent},
  {path:"contacto",component:ContactoComponent, canActivate:[LoginGuardian]},
  {path:"actualizar/:id",component:ActualizaEmpleadoComponent},
  {path:"login",component:LoginComponent},
  {path:"**",component:ErrorComponentComponent},  //Componente del errror
]

@NgModule({
  declarations: [
    AppComponent,Empleado, ListaEmpleadosComponent, CaracteristicasComponent, HomeComponent, ProyectosComponent, QuienesSomosComponent, ContactoComponent, ActualizaEmpleadoComponent, ErrorComponentComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule  //Conectar con servicio de BD

  ],
  providers: [ServicioEmpleadosService,EmpleadoService,
    GuardarEmpleadoService,LoginServiceService,CookieService,LoginGuardian],
  bootstrap: [AppComponent]
})
export class AppModule { }
