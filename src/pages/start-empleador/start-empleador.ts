import { Component } from '@angular/core';
import { PerfilEmpleadorPage } from '../perfil-empleador/perfil-empleador';
import { ListaServicioPage } from '../lista-servicio/lista-servicio';
import { NotificacionEmpPage } from '../notificacion-emp/notificacion-emp';


/**
 * Generated class for the StartEmpleadorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  templateUrl: 'start-empleador.html',
})
export class StartEmpleadorPage {
  
  tab1=ListaServicioPage;
  tab2=PerfilEmpleadorPage;
  tab3=NotificacionEmpPage;

  constructor() {
  }

}
