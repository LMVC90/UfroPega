import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController, AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { UserModel } from '../../models/user-model';
import { ListaEmpleoPage } from '../lista-empleo/lista-empleo';
import * as firebase from 'firebase';


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
   public authService: AuthService) {
   this.userModel = new UserModel();   
 }
   
 ionViewDidLoad() {
   console.log('ionViewDidLoad LoginPage');
 }

forgot(email){
  firebase.auth().sendPasswordResetEmail(email).then(data => {
    console.log("Correcto");
  }).catch(error => {
    console.log("Error");
    this.alert('Error', 'Ha ocurrido un error. Por favor ingrese un correo valido.');
  });
}

login(){
  let loading = this.loadingCtrl.create({
    content: 'Iniciando sesión. Por favor, espere...'
    });
    loading.present();    

this.authService.signInWithEmailAndPassword(this.userModel).then(result => {
    loading.dismiss();
    this.navCtrl.setRoot(ListaEmpleoPage);
}).catch(error => {
    loading.dismiss();

    console.log(error);
    this.alert('Error', 'Ha ocurrido un error inesperado. Por favor intente nuevamente.');
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

}
