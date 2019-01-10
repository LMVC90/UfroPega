import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/mergeMapTo';
import 'rxjs/add/operator/map';
import { SolicitudProvider } from '../../providers/solicitud/solicitud';
import { LocalNotifications } from '@ionic-native/local-notifications';


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
  rechazadas:number;
  aceptadas:number;
  firstRec:boolean;
  firstAce:boolean;
  pestanna:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private _sol:SolicitudProvider, private _locNot: LocalNotifications) {
    this.pestanna = "aceptadas";
    this.firstRec = false;
    this.firstAce = false;
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

    this.rechazadas = 0;
    return Observable
    .interval(5000)
    .mergeMapTo(this.fetchNotificacion())
    .map(res => res)
    .subscribe(data => {
      this.soli = data;
      console.table(data);
      this.revisarCambios(this.revisarCantidadRechazadas(), this.revisarCantidadAceptadas());
  });
  }

  private fetchNotificacion() {
    return this._sol.query();
  }

  revisarCantidadRechazadas(){
    var auxiliar = 0;
    for(var i = 0; i < this.soli.length; i++) {
      if(this.soli[i].id_estudiante == this.userId && this.soli[i].estado == 0 && this.soli[i].origen == 0){
        auxiliar++;
        console.log("rechazadas: " + this.rechazadas);
      }
    }
    return auxiliar;
  }

  revisarCantidadAceptadas(){
    var auxiliar = 0;
    for(var i = 0; i < this.soli.length; i++) {
      if(this.soli[i].id_estudiante == this.userId && this.soli[i].estado == 1 && this.soli[i].origen == 0){
        auxiliar++;
        console.log("aceptadas: " + this.aceptadas);
      }
    }
    return auxiliar;
  }

  revisarCambios(cantidadRec: number, cantidadAce: number){
    if(this.rechazadas < cantidadRec && this.firstRec) {
      console.log("NUEVA PEGA RECHAZADA");
      this._locNot.schedule({
        id: 1,
        text: 'NUEVA PEGA RECHAZADA'
        //sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
        //data: { secret: key }
      });
    }
    this.rechazadas = cantidadRec;
    this.firstRec = true;

    if(this.aceptadas < cantidadAce && this.firstAce) {
      console.log("NUEVA PEGA ACEPTADA");
      this._locNot.schedule({
        id: 1,
        text: 'NUEVA PEGA ACEPTADA'
        //sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
        //data: { secret: key }
      });
    }
    this.aceptadas = cantidadAce;
    this.firstAce = true;
  }

}
