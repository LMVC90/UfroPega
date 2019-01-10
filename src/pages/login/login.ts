import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController, AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { UserModel } from '../../models/user-model';
import { RolProvider } from '../../providers/rol/rol';
import { StartPage } from '../start/start';
import { StartEmpleadorPage } from '../start-empleador/start-empleador';
import * as firebase from 'firebase';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  userModel: UserModel;

//login data
  loginData = {};
  info:any[];
  rol: any;
  id: any;

 constructor(
   public navCtrl: NavController, 
   public navParams: NavParams,
   public loadingCtrl: LoadingController,
   public alertCtrl: AlertController,
   public authService: AuthService,
   private _rol: RolProvider) {
     
   this.userModel = new UserModel();
   this._rol.query().subscribe(
    Response => {
        this.info = Response;
        console.log(this.info);
  });
  this.rol='';
  this.id='';
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
  localStorage.setItem('email',this.userModel.email);
    loading.dismiss();
    this.verifRol();
}).catch(error => {
    loading.dismiss();

    console.log(error);
    this.alert('Ups!', 'Usuario o Contraseña incorrectos');
});

  
}
alert(title: string, message: string) {
  let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
  });
  alert.present();
}


// segun el rol navega a un toolbar
verifRol(){
  if(this.getRol() == 'empleador'){
      this.navCtrl.setRoot(StartEmpleadorPage);
  }else{
    this.navCtrl.setRoot(StartPage);
  }
}

getRol(): any{   //recorrer lista de usuarios para obtener rol de usuario actual
  if(this.info){ 
  this.info.forEach(element => {
    console.log(element); // ---------------
      if (element.correo == localStorage.getItem('email')) {
        this.id = element.id_usuario;
        localStorage.setItem("id",this.id);
        this.rol = element.rol  
        console.log(this.rol);        
      }
    });
    console.log(this.rol);
  return this.rol
}
}
cleanRol(){
this.rol ='';
}


}
