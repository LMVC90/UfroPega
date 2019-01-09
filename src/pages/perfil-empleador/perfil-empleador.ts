import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RolProvider } from '../../providers/rol/rol';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';

/**
 * Generated class for the PerfilEmpleadorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-perfil-empleador',
  templateUrl: 'perfil-empleador.html',
})
export class PerfilEmpleadorPage {

  information: any;
  id:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _http:Http) {
    this._http.get('../../assets/Usuario.json').map(res => res.json()).subscribe(data => {
      this.information = data;
      console.log(data);
  });
  this.id=localStorage.getItem("id");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilEmpleadorPage');
  }

}
