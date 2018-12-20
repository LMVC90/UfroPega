import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { PerfilEmpleadorPage } from '../pages/perfil-empleador/perfil-empleador';
import { PerfilEstudiantePage } from '../pages/perfil-estudiante/perfil-estudiante';
import { ListaEmpleoPage } from '../pages/lista-empleo/lista-empleo';
import { RegistroUsuarioPage } from '../pages/registro-usuario/registro-usuario';
import { HttpModule } from '@angular/http';
import { PerfilEmpleoPage } from '../pages/perfil-empleo/perfil-empleo';
import { NotificacionPage } from '../pages/notificacion/notificacion';



@NgModule({
  declarations: [
    MyApp,
    RegistroUsuarioPage,
    ListaEmpleoPage,
    PerfilEstudiantePage,
    PerfilEmpleadorPage,
    LoginPage,
    PerfilEmpleoPage,
    NotificacionPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RegistroUsuarioPage,
    ListaEmpleoPage,
    PerfilEstudiantePage,
    PerfilEmpleadorPage,
    LoginPage,
    PerfilEmpleoPage,
    NotificacionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
