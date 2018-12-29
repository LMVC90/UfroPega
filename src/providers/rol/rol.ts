import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';

/*
  Generated class for the RolProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RolProvider {

  information: any[];

  constructor(public http: HttpClient, private _http: Http) {
    this._http.get('../../assets/Usuario.json').map(res => res.json()).subscribe(data => {
      this.information = data;
      console.log(this.information);
  });

  }

  getRol(){   //recorrer lista de usuarios para obtener rol de usuario actual
    /*if(this.information){
      this.information.forEach(element => {
        if (element.correo == firebase.getCorreo()) {
          return element.rol
        }
      });
    }*/
    return true;
  }

}
