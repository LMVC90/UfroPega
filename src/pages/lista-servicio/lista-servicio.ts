import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { LoginPage } from '../login/login';


/**
 * Generated class for the ListaServicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lista-servicio',
  templateUrl: 'lista-servicio.html',
})
export class ListaServicioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthService,private _app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaServicioPage');
  }

  logOut(){
    this.auth.signOut();
    localStorage.removeItem('email');
    //this.navCtrl.setRoot(LoginPage);
    this._app.getRootNav().setRoot(LoginPage);
  }

}
