import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  // private updat = new BehaviorSubject<any>(null);
  // public onUpDate = this.updat.asObservable();
  private api = environment.host;

  constructor( private http: HttpClient ) { }

  get(api, id = null) {
    return new Promise((resolve, reject) => {
      id = id ? '/' + id : id;
      this.http.get(`${this.api}${api}${id ? id : ''}`).subscribe(data => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  post(api, obj) {
    return new Promise((resolve, reject) => {
      this.http.post(`${this.api}${api}`, obj).subscribe(data => {
       resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  delete(api, id = null) {
    return new Promise((resolve, reject) => {
      this.http.delete(`${this.api}${api}/${id ? id : ''}`).subscribe(data => {
       resolve(data);
      }, error => {
        reject(error);
      });
    });
  }
}
