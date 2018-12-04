import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { PerfilEmpleadorPage } from '../pages/perfil-empleador/perfil-empleador';
import { PerfilEstudiantePage } from '../pages/perfil-estudiante/perfil-estudiante';
import { ListaEmpleoPage } from '../pages/lista-empleo/lista-empleo';
import { RegistroUsuarioPage } from '../pages/registro-usuario/registro-usuario';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistroUsuarioPage,
    ListaEmpleoPage,
    PerfilEstudiantePage,
    PerfilEmpleadorPage,
    LoginPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegistroUsuarioPage,
    ListaEmpleoPage,
    PerfilEstudiantePage,
    PerfilEmpleadorPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
