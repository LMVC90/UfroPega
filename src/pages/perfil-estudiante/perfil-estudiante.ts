import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { EditarPerfilPage } from '../editar-perfil/editar-perfil';
import { RolProvider } from '../../providers/rol/rol';


@Component({
  selector: 'page-perfil-estudiante',
  templateUrl: 'perfil-estudiante.html',
})
export class PerfilEstudiantePage {
  perfil: any;
  id:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _rol: RolProvider) {
    this._rol.get( parseInt(localStorage.getItem("id"))).subscribe(Response=>{
      this.perfil=Response;
      console.log(Response);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilEstudiantePage');
  }

  editarPerfil() {
    this.navCtrl.push(EditarPerfilPage);
  }

}
