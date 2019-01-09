import { Component } from '@angular/core';
import { PerfilEmpleadorPage } from '../perfil-empleador/perfil-empleador';
import { NotificacionPage } from '../notificacion/notificacion';
import { ListaServicioPage } from '../lista-servicio/lista-servicio';

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
  tab3=NotificacionPage;

  constructor() {
  }

}
