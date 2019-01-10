import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PerfilEmpleoPage } from '../perfil-empleo/perfil-empleo';
import { AuthService } from '../../providers/auth-service';
import { LoginPage } from '../login/login';
import { CategoriaProvider } from '../../providers/categoria/categoria';
import { OfertaProvider } from '../../providers/oferta/oferta';


@Component({
  selector: 'page-lista-empleo',
  templateUrl: 'lista-empleo.html',
})
export class ListaEmpleoPage {

  ofertas: any[];
  categorias: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private _auth: AuthService, private _cat: CategoriaProvider,private _ofe:OfertaProvider ) {

    this._cat.query().subscribe(Response=>{
      this.categorias=Response;
      console.log(Response);
    });
    this._ofe.query().subscribe(Response=>{
      this.ofertas=Response;
      console.log(Response);
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
