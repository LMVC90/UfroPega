import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { PerfilEmpleadorPage } from '../pages/perfil-empleador/perfil-empleador';
import { PerfilEstudiantePage } from '../pages/perfil-estudiante/perfil-estudiante';
import { ListaEmpleoPage } from '../pages/lista-empleo/lista-empleo';
import { NotificacionPage } from '../pages/notificacion/notificacion';
import { RolProvider } from '../providers/rol/rol';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav; //  nav menu

  rootPage: any = LoginPage;

  pages: Array<{ title: string, component: any }>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private rol: RolProvider) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    if (this.rol.getRol()) {
      this.pages = [
        { title: 'Perfil Estudiante', component: PerfilEstudiantePage },
        { title: 'Lista de Empleos', component: ListaEmpleoPage },
        { title: 'Notificaciones', component: NotificacionPage }
      ];
    }
    else {
      this.pages = [
        { title: 'Perfil Empleador', component: PerfilEmpleadorPage },
        { title: 'Notificaciones', component: NotificacionPage }
      ]
    }

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

