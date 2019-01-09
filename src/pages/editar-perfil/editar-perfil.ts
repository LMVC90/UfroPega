import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';
import { PerfilEmpleadorPage } from '../perfil-empleador/perfil-empleador';
import { PerfilEstudiantePage } from '../perfil-estudiante/perfil-estudiante';

/**
 * Generated class for the EditarPerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-editar-perfil',
  templateUrl: 'editar-perfil.html',
})
export class EditarPerfilPage {

  information: any;
  id_user: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _http:Http) {
    this.id_user = navParams.get("id_usuario");
    this._http.get('http://10.10.11.44:83/api/usuario/').map(res => res.json()).subscribe(data => {
      console.log(data);
      this.information = data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarPerfilPage');
  }

  updatePerfil(item) {
    console.log('Updateando');
    console.log(this.id_user);
    console.log(item);
    this._http.put('http://10.10.11.44:83/api/usuario/' + this.id_user, item);
    if(item.rol == "empleador"){
      this.navCtrl.push(PerfilEmpleadorPage);
    }
    else{
      this.navCtrl.push(PerfilEstudiantePage);
    }
  }

}
