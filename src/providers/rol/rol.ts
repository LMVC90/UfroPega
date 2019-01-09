import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';
import { AuthService } from '../auth-service';
import { auth } from 'firebase';


/*
  Generated class for the RolProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RolProvider {

  information: any[];
  rol: any;
  id: any;

  constructor(public http: HttpClient, private _http: Http, private _auth: AuthService) {
    this._http.get('../../assets/Usuario.json').map(res => res.json()).subscribe(data => {
      this.information = data;
      console.log(data);
  });
    this.rol='';
    this.id='';
  }


  getRol(): any{   //recorrer lista de usuarios para obtener rol de usuario actual
    if(this.information){ 
    this.information.forEach(element => {
        if (element.correo == localStorage.getItem('email')) {
          this.id = element.id_usuario;
          localStorage.setItem("id",this.id);
          this.rol = element.rol  
          console.log(this.rol);        
        }
      });
      console.log(this.rol);
    return this.rol
  }
}


cleanRol(){
  this.rol ='';
}

}
