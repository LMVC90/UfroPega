import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GLOBAL } from '../Global';
import { Oferta } from '../../model/oferta';


/*
  Generated class for the OfertaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OfertaProvider {

  constructor(public _http: HttpClient) {
    console.log('Hello OfertaProvider Provider');
  }


  public getID(oferta: Oferta | number): number {
    return oferta instanceof Oferta ? oferta.id_oferta : oferta;
  }
  
  public save(oferta: Oferta): Observable<any> {
    return this._http.post(GLOBAL.url + 'oferta', Oferta.getJSON(oferta));
  }
  
  public update(oferta: Oferta): Observable<any> {
    return this._http.put(GLOBAL.url + 'oferta/' + oferta.id_oferta, Oferta.getJSON(oferta));
  }
  
  public query(): Observable<Oferta[]> {
    return this._http.get<Oferta[]>(GLOBAL.url + 'oferta')
        .pipe(map(ofertas => ofertas.map(usuario => new Oferta(usuario))));
  }
  
  public get(id: number): Observable<Oferta> {
    return this._http.get<Oferta>(GLOBAL.url + 'oferta/' + id)
        .pipe(map(oferta => new Oferta(oferta)));
  }
  
  public delete(oferta: Oferta | number): Observable<any> {
    return this._http.delete(GLOBAL.url + 'oferta/' + this.getID(oferta));
  }

}
