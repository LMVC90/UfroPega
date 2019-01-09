import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController, AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { UserModel } from '../../models/user-model';
//import { ListaEmpleoPage } from '../lista-empleo/lista-empleo';
import { RolProvider } from '../../providers/rol/rol';
import { PerfilEmpleadorPage } from '../perfil-empleador/perfil-empleador';
import { ListaEmpleoPage } from '../lista-empleo/lista-empleo';
import { StartPage } from '../start/start';
import { StartEmpleadorPage } from '../start-empleador/start-empleador';



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  userModel: UserModel;

//login data
  loginData = {};

 constructor(
   public navCtrl: NavController, 
   public navParams: NavParams,
   public loadingCtrl: LoadingController,
   public alertCtrl: AlertController,
   public authService: AuthService,
   private _rol: RolProvider) {
   this.userModel = new UserModel();
   //this._rol.cleanRol();
 }
  

login(){
  
  let loading = this.loadingCtrl.create({
    content: 'Iniciando sesión. Por favor, espere...'
    });
    loading.present();    

this.authService.signInWithEmailAndPassword(this.userModel).then(result => {
  localStorage.setItem('email',this.userModel.email);
    loading.dismiss();
    this.verifRol();
}).catch(error => {
    loading.dismiss();

    console.log(error);
    this.alert('Ups!', 'Usuario o Contraseña incorrectos');
});

  //this.navCtrl.push(ListaEmpleoPage);}
 
  //this.navCtrl.setRoot(ListaEmpleoPage);

  
}
alert(title: string, message: string) {
  let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
  });
  alert.present();
}


//
verifRol(){
  if(this._rol.getRol() == 'empleador'){
      this.navCtrl.setRoot(StartEmpleadorPage);
  }else{
    this.navCtrl.setRoot(StartPage);
  }
}


}
