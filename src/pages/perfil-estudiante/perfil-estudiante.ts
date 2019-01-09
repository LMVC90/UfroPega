import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';
import { EditarPerfilPage } from '../editar-perfil/editar-perfil';

/**
 * Generated class for the PerfilEstudiantePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-perfil-estudiante',
  templateUrl: 'perfil-estudiante.html',
})
export class PerfilEstudiantePage {
  information: any;
  id:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _http:Http) {
    this._http.get('http://10.10.11.44:83/api/usuario/').map(res => res.json()).subscribe(data => {
      this.information = data;
      console.log(data);
  });
  this.id=localStorage.getItem("id");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilEstudiantePage');
  }

  editarPerfil(id_usuario) {
    this.navCtrl.push(EditarPerfilPage, {id_usuario});
  }

}
