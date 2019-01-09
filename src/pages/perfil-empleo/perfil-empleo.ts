import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RolProvider } from '../../providers/rol/rol';

/**
 * Generated class for the PerfilEmpleoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-perfil-empleo',
  templateUrl: 'perfil-empleo.html',
})
export class PerfilEmpleoPage {

  datos: any;
  public oferta;

  constructor(public navCtrl: NavController, public navParams: NavParams,private _usu: RolProvider) {
    this.oferta = navParams.get("oferta");
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilEmpleoPage');
  }

}
