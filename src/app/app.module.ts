import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// Importa módulos de firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Credenciales y configuración inicial de firebase
export const firebaseConfig = {
  apiKey: "AIzaSyB7Tx2zmbmVxaMe-dZqpRAqefnatezs07k",
    authDomain: "ufropega.firebaseapp.com",
    databaseURL: "https://ufropega.firebaseio.com",
    projectId: "ufropega",
    storageBucket: "ufropega.appspot.com",
    messagingSenderId: "157704278519"
};

// Importa páginas
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { PerfilEmpleadorPage } from '../pages/perfil-empleador/perfil-empleador';
import { PerfilEstudiantePage } from '../pages/perfil-estudiante/perfil-estudiante';
import { EditarPerfilPage } from '../pages/editar-perfil/editar-perfil';
import { ListaEmpleoPage } from '../pages/lista-empleo/lista-empleo';
import { RegistroUsuarioPage } from '../pages/registro-usuario/registro-usuario';
import { PerfilEmpleoPage } from '../pages/perfil-empleo/perfil-empleo';
import { NotificacionPage } from '../pages/notificacion/notificacion';
import { HttpModule } from '@angular/http';

// Para el inicio de sesion

import { AuthService } from '../providers/auth-service';
import { StartPage } from '../pages/start/start';
import { StartEmpleadorPage } from '../pages/start-empleador/start-empleador';
import { ListaServicioPage } from '../pages/lista-servicio/lista-servicio';
import { HttpClientModule } from '@angular/common/http';
import { RolProvider } from '../providers/rol/rol';
import { CategoriaProvider } from '../providers/categoria/categoria';
import { OfertaProvider } from '../providers/oferta/oferta';
import { SolicitudProvider } from '../providers/solicitud/solicitud';
import { NotificacionEmpPage } from '../pages/notificacion-emp/notificacion-emp';
import { LocalNotifications } from '@ionic-native/local-notifications';




//import { UsuarioPage } from '../pages/usuario/usuario';



@NgModule({
  declarations: [
    MyApp,
    RegistroUsuarioPage,
    ListaEmpleoPage,
    PerfilEstudiantePage,
    PerfilEmpleadorPage,
    EditarPerfilPage,
    LoginPage,
    PerfilEmpleoPage,
    NotificacionPage,
    StartPage,
    StartEmpleadorPage,
    ListaServicioPage,
    NotificacionEmpPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
    // Importa módulos firebase
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RegistroUsuarioPage,
    ListaEmpleoPage,
    PerfilEstudiantePage,
    PerfilEmpleadorPage,
    EditarPerfilPage,
    LoginPage,
    PerfilEmpleoPage,
    NotificacionPage,
    StartPage,
    StartEmpleadorPage,
    ListaServicioPage,
    NotificacionEmpPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    RolProvider,
    CategoriaProvider,
    OfertaProvider,
    SolicitudProvider,
    LocalNotifications
  ]
})
export class AppModule {}
