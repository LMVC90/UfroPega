import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GLOBAL } from '../Global';
import { Categoria } from '../../model/categoria';

/*
  Generated class for the CategoriaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategoriaProvider {

  constructor(public _http: HttpClient) {
    console.log('Hello CategoriaProvider Provider');
  }


  public getID(categoria: Categoria | number): number {
    return categoria instanceof Categoria ? categoria.id_categoria : categoria;
  }
  
  public save(categoria: Categoria): Observable<any> {
    return this._http.post(GLOBAL.url + 'categoria', Categoria.getJSON(categoria));
  }
  
  public update(categoria: Categoria): Observable<any> {
    return this._http.put(GLOBAL.url + 'categoria/' + categoria.id_categoria, Categoria.getJSON(categoria));
  }
  
  public query(): Observable<Categoria[]> {
    return this._http.get<Categoria[]>(GLOBAL.url + 'categoria')
        .pipe(map(categorias => categorias.map(categoria => new Categoria(categoria))));
  }
  
  public get(id: number): Observable<Categoria> {
    return this._http.get<Categoria>(GLOBAL.url + 'categoria/' + id)
        .pipe(map(categoria => new Categoria(categoria)));
  }
  
  public delete(categoria: Categoria | number): Observable<any> {
    return this._http.delete(GLOBAL.url + 'categoria/' + this.getID(categoria));
  }

}
