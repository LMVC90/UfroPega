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

  ofertas: any[];
  categorias: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private _http: Http  ) {

/*
    this._http.get('../../assets/Oferta.json').map(res => res.json()).subscribe(data => {
      this.ofertas = data;
      console.log(this.ofertas);
    });
    this._http.get('../../assets/Categorias.json').map(res => res.json()).subscribe(data => {
      this.categorias = data;
      console.log(this.categorias);
    });
*/
    this._http.get('https://sheetsu.com/apis/v1.0bu/b22af3c25ea7/sheets/ofertas').map(res => res.json()).subscribe(data => {
      this.ofertas = data;
      console.log(this.ofertas);
    });
    this._http.get('https://sheetsu.com/apis/v1.0bu/b22af3c25ea7/sheets/categorias').map(res => res.json()).subscribe(data => {
      this.categorias = data;
      console.log(this.categorias);
    });
  
    }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaEmpleoPage');
  }

    verPerfil(oferta){
      this.navCtrl.push(PerfilEmpleoPage, {oferta});
    }

    toggleSection(i) {
      this.categorias[i].open = !this.categorias[i].open;
      this.cerrarHermanos(i);
    }
    cerrarHermanos(i) {
      for (var j = 0; j < this.categorias.length; j++) {
        if(j != i){
          this.categorias[j].open = false;
        }
      }
    }
}
