import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Time} from '../interface';

@Injectable({
  providedIn: 'root'
})
export class EmporioarmaniService {

  constructor(private http: HttpClient) { }

  getArmani(): Observable<Time[]>{
    return this.http.get<Time[]>('http://localhost:3000/emporioarmani');
  }
}
