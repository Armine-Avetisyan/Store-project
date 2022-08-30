import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Time} from '../interface';

@Injectable({
  providedIn: 'root'
})
export class PandoraService {

  constructor(private http: HttpClient) { }

  getPandora(): Observable<Time[]>{
    return this.http.get<Time[]>('http://localhost:3000/pandora');
  }
}
