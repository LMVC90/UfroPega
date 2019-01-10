import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RolProvider } from '../../providers/rol/rol';
import { EditarPerfilPage } from '../editar-perfil/editar-perfil';


@Component({
  selector: 'page-perfil-empleador',
  templateUrl: 'perfil-empleador.html',
})
export class PerfilEmpleadorPage {

  perfil: any;
  id:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _rol:RolProvider) {
    this.id= localStorage.getItem("id");
    this._rol.get( parseInt(this.id)).subscribe(Response=>{
      this.perfil=Response;
      console.table(this.perfil);
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilEmpleadorPage');
  }
  editarPerfil() {
    this.navCtrl.push(EditarPerfilPage);
  }
}
