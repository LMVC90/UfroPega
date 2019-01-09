import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/mergeMapTo';
import 'rxjs/add/operator/map';

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

  info:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http) {
    this.getNotificacion();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificacionPage');
  }


  private getNotificacion() {   // async
     Observable
    .interval(10000)
    .mergeMapTo(this.fetchNotificacion())
    .map(res => res.json())
    .subscribe(data => {
      this.info = data;
      //console.log(data);
      console.table(data);
  });
  }

  private fetchNotificacion() {
    return this.http.get('https://sheetsu.com/apis/v1.0bu/b22af3c25ea7/sheets/solicitudes');
  }

}
