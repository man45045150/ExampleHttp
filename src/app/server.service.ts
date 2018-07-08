import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

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
    //convert json to object
    return this.http.get(this.url+'/error')
      .pipe(
        map(
          (res :Response) => {
            const data = res.json();
            for (const server of data) {
              server.name = 'FETCHED_'+server.name;
            }
            return data;
          }
        ),
        catchError(error=>{
          return throwError('Something went wrong');
        })
      );
  }
}
