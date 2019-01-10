import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { LoginPage } from '../login/login';
import { OfertaProvider } from '../../providers/oferta/oferta';


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

ofertas:any[];
id:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthService,private _app: App,private _ofe:OfertaProvider) {
    this.id=localStorage.getItem("id");
    this._ofe.query().subscribe(Response=>{
      this.ofertas=Response;
      console.log(Response);
    });
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
