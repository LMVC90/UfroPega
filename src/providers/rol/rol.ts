import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth-service';
import { auth } from 'firebase';
import { GLOBAL } from '../Global';
import { Usuario } from '../../model/usuario';


@Injectable()
export class RolProvider {

  constructor(public _http: HttpClient) {
    
  }

public getID(usuario: Usuario | number): number {
  return usuario instanceof Usuario ? usuario.id_usuario : usuario;
}

public save(usuario: Usuario): Observable<any> {
  return this._http.post(GLOBAL.url + 'usuario', Usuario.getJSON(usuario));
}

public update(usuario: Usuario): Observable<any> {
  return this._http.put(GLOBAL.url + 'usuario/' + usuario.id_usuario, Usuario.getJSON(usuario));
}

public query(): Observable<Usuario[]> {
  return this._http.get<Usuario[]>(GLOBAL.url + 'usuario')
      .pipe(map(usuarios => usuarios.map(usuario => new Usuario(usuario))));
}

public get(id: number): Observable<Usuario> {
  return this._http.get<Usuario>(GLOBAL.url + 'usuario/' + id)
      .pipe(map(usuario => new Usuario(usuario)));
}

public delete(usuario: Usuario | number): Observable<any> {
  return this._http.delete(GLOBAL.url + 'usuario/' + this.getID(usuario));
}

}
