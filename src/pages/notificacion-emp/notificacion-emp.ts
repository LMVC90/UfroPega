import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/mergeMapTo';
import 'rxjs/add/operator/map';
import { SolicitudProvider } from '../../providers/solicitud/solicitud';


@Component({
  selector: 'page-notificacion-emp',
  templateUrl: 'notificacion-emp.html',
})
export class NotificacionEmpPage {

  data:any;
  soli:any[];
  userId:any;
  info:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private _sol:SolicitudProvider) {
    this._sol.query().subscribe(Response =>{
      this.soli= Response;
      console.log(Response);
    });
    this.userId=localStorage.getItem("id");
    this.getNotificacion();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificacionPage');
  }

  private getNotificacion()  {   // async
    return Observable
    .interval(5000)
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
