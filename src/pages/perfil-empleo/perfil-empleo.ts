import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Oferta } from '../../model/oferta';
import { SolicitudProvider } from '../../providers/solicitud/solicitud';
import { Solicitud } from '../../model/solicitud';
import { RolProvider } from '../../providers/rol/rol';


@Component({
  selector: 'page-perfil-empleo',
  templateUrl: 'perfil-empleo.html',
})
export class PerfilEmpleoPage {

  datos: any;
  public oferta;
  usu:any;
  sol:any[];
  solicitud:Solicitud;


  constructor(public navCtrl: NavController, public navParams: NavParams,private _sol: SolicitudProvider,private _usu:RolProvider) {

    this.datos = navParams.get("oferta");
    console.log(this.datos);

    this._usu.get(this.datos.empleador).subscribe(Response=>{
      this.usu = Response;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilEmpleoPage');
  }

  solicitar( item: Oferta){

    /*
    this.sol.push('1');
    this.sol.push(parseInt(localStorage.getItem("id")));
    this.sol.push('');
    this.sol.push('0');
    this.sol.push(item.id_oferta);
    this.sol.push(item.nombre);
    this.sol.push(item.empleador);
    */

    this.solicitud.origen = '1';
    this.solicitud.id_estudiante =parseInt(localStorage.getItem("id"));
    this.solicitud.fecha = '';
    this.solicitud.estado = '0';
    this.solicitud.oferta_id = item.id_oferta;
    this.solicitud.nombre_ofer = item.nombre;
    this.solicitud.id_empleador = parseInt(item.empleador);

    console.log(this.solicitud);
    this._sol.save(this.solicitud);
      
  }


}
