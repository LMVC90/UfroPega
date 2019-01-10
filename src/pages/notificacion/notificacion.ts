import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/mergeMapTo';
import 'rxjs/add/operator/map';
import { SolicitudProvider } from '../../providers/solicitud/solicitud';
import { analyzeAndValidateNgModules } from '@angular/compiler';


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
  pasaRec:boolean;
  pasaAce:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,private _sol:SolicitudProvider) {
    this.pasaRec = false;
    this.pasaAce = false;
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
    if(this.rechazadas < cantidadRec && this.pasaRec) {
      console.log("NUEVA PEGA RECHAZADA");
    }
    this.rechazadas = cantidadRec;
    this.pasaRec = true;

    if(this.aceptadas < cantidadAce && this.pasaAce) {
      console.log("NUEVA PEGA ACEPTADA");
    }
    this.rechazadas = cantidadRec;
    this.pasaRec = true;
  }

}
