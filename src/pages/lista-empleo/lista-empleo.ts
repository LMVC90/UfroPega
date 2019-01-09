import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';
import { PerfilEmpleoPage } from '../perfil-empleo/perfil-empleo';
import { AuthService } from '../../providers/auth-service';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-lista-empleo',
  templateUrl: 'lista-empleo.html',
})
export class ListaEmpleoPage {

  ofertas: any[];
  categorias: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private _http: Http, private _auth: AuthService ) {

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

    verPerfil(oferta){
      this.navCtrl.push(PerfilEmpleoPage, {oferta});
    }

    logOut(){
      this._auth.signOut();
      localStorage.removeItem('email');
      this.navCtrl.setRoot(LoginPage);
    }



  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaEmpleoPage');
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
