import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';
import { PerfilEmpleadorPage } from '../perfil-empleador/perfil-empleador';
import { PerfilEstudiantePage } from '../perfil-estudiante/perfil-estudiante';
import { RolProvider } from '../../providers/rol/rol';

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

  info: any;
  id_user: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _http:Http,private _rol:RolProvider) {
    this.id_user = parseInt(localStorage.getItem("id"));
    this._rol.get(this.id_user).subscribe(Response=>{
      this.info=Response;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarPerfilPage');
  }

  updatePerfil(item) {
    console.log('Updateando');
    console.log(this.id_user);
    console.log(item);
    this._rol.update(item).subscribe(Response=>{

      if(item.rol == "empleador"){
        this.navCtrl.push(PerfilEmpleadorPage);
      }
      else{
        this.navCtrl.push(PerfilEstudiantePage);
      }
    });
    
  }

}
