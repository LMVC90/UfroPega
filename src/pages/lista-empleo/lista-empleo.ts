import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';
import { PerfilEmpleoPage } from '../perfil-empleo/perfil-empleo';



/**
 * Generated class for the ListaEmpleoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-lista-empleo',
  templateUrl: 'lista-empleo.html',
})
export class ListaEmpleoPage {

  information: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private _http: Http  ) {


    this._http.get('../../assets/Oferta.json').map(res => res.json()).subscribe(data => {
      this.information = data;
      console.log(this.information);
  });
    }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaEmpleoPage');
  }

    verPerfil(){
      this.navCtrl.push(PerfilEmpleoPage);
    }

}
