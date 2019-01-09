import { Component } from '@angular/core';
import { ListaEmpleoPage } from '../lista-empleo/lista-empleo';
import { PerfilEstudiantePage } from '../perfil-estudiante/perfil-estudiante';
import { NotificacionPage } from '../notificacion/notificacion';



/**
 * Generated class for the StartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  templateUrl: 'start.html'
})
export class StartPage {
 
      tab4= ListaEmpleoPage;
      tab5= PerfilEstudiantePage;
      tab6= NotificacionPage;

  constructor() {
  }

}


