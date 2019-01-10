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
  userId:any;
  info:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http,private _sol:SolicitudProvider) {
    this._sol.query().subscribe(Response =>{
      this.soli= Response;
      console.log(Response);
    });
    
    this.getNotificacion();
    this.userId=localStorage.getItem("id");
    console.log("User Id: "+this.userId);
    //this.getNotList();
  }

  clickTest(item) {
    console.log(item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificacionPage');
  }

  getNotList(): Observable<any[]> {
    console.log("OBS");
    console.log(this.fetchNotificacion().pipe(map(response => response.json())));
    return this.fetchNotificacion().pipe(map(response => response.json()));
  }

  getNot() {
    return this.http.get('https://sheetsu.com/apis/v1.0bu/e074a3875116/sheets/solicitudes')
    .map(res => res.json())
    .catch(this.catchError)
    .subscribe(
      resultado => this.info = resultado,
      error => console.log(error)
    )
  }

  private catchError(error: Response | any) {
      console.log(error);
      return Observable.throw(error.json().error || "Serve error");
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
