import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GLOBAL } from '../Global';
import { Solicitud } from '../../model/solicitud';


@Injectable()
export class SolicitudProvider {

  constructor(public _http: HttpClient) {
    console.log('Hello SolicitudProvider Provider');
  }


  public getID(solicitud: Solicitud | number): number {
    return solicitud instanceof Solicitud ? solicitud.id_solicitud : solicitud;
  }
  
  public save(solicitud: Solicitud): Observable<any> {
    return this._http.post(GLOBAL.url + 'solicitud', Solicitud.getJSON(solicitud));
  }
  
  public update(solicitud: Solicitud): Observable<any> {
    return this._http.put(GLOBAL.url + 'solicitud/' + solicitud.id_solicitud, Solicitud.getJSON(solicitud));
  }
  
  public query(): Observable<Solicitud[]> {
    return this._http.get<Solicitud[]>(GLOBAL.url + 'solicitud')
        .pipe(map(solicitudes => solicitudes.map(solicitud => new Solicitud(solicitud))));
  }
  
  public get(id: number): Observable<Solicitud> {
    return this._http.get<Solicitud>(GLOBAL.url + 'solicitud/' + id)
        .pipe(map(solicitud => new Solicitud(solicitud)));
  }
  
  public delete(solicitud: Solicitud | number): Observable<any> {
    return this._http.delete(GLOBAL.url + 'solicitud/' + this.getID(solicitud));
  }
}
