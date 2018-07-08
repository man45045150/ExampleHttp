import { Http,Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  private url = 'https://udemy-ng-http-94332.firebaseio.com/data.json';
  constructor(private http:Http) { }
  storeServers(servers:any[]){
    const headers = new Headers({'Content-Type':'application/json'});
    // return this.http.post(this.url,
    // servers,
    // {headers: headers });
    return this.http.put(this.url,
      servers,
      {headers: headers });
  }
  getServers(){
    return this.http.get(this.url);
  }
}
