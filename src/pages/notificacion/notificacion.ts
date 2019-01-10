import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/mergeMapTo';
import 'rxjs/add/operator/map';
import { SolicitudProvider } from '../../providers/solicitud/solicitud';


/**
 * Generated class for the NotificacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-notificacion',
  templateUrl: 'notificacion.html',
})
export class NotificacionPage {

  data:any;
  soli:any[];
  info:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http,private _sol:SolicitudProvider) {
    this._sol.query().subscribe(Response =>{
      this.soli= Response;
      console.log(Response);
    });
    
    this.getNotificacion();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificacionPage');
  }


  private getNotificacion() {   // async
     Observable
    .interval(10000)
    .mergeMapTo(this.fetchNotificacion())
    .map(res => res)
    .subscribe(data => {
      this.soli = data;
      console.table(data);
  });
  }

  private fetchNotificacion() {
    return this._sol.query();
  }

}
