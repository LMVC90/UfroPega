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

  information: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private _http: Http, private _auth: AuthService ) {

    

    this._http.get('../../assets/Oferta.json').map(res => res.json()).subscribe(data => {
      this.information = data;
      console.log(this.information);
  });
    }

    verPerfil(){
      this.navCtrl.push(PerfilEmpleoPage);
    }

    logOut(){
      this._auth.signOut();
      localStorage.removeItem('email');
      this.navCtrl.setRoot(LoginPage);
    }


}
