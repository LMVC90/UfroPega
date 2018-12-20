import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListaEmpleoPage } from '../lista-empleo/lista-empleo';


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
//login data
  loginData = {};

 constructor(public navCtrl: NavController, public navParams: NavParams) {
   
 }
   
 ionViewDidLoad() {
   console.log('ionViewDidLoad LoginPage');
 }

login(){
  //this.navCtrl.push(ListaEmpleoPage);}
  this.navCtrl.setRoot(ListaEmpleoPage);
}



}
