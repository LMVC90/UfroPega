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
  id: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,private _usu: RolProvider) {
    this.id = navParams.get("oferta_id");
    this.oferta = navParams.get("oferta");
    if(this.id > 0){
      this.oferta = {
        "nombre": "nombre",
        "oferta": "oferta",
        "monto": "monto",
        "cupos": "cupos",
        "ubicacion": "ubicacion"
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilEmpleoPage');
  }

}
