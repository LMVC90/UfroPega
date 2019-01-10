import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RolProvider } from '../../providers/rol/rol';


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
