import { Injectable }   from '@angular/core';
import { Http,Headers,RequestOptions}   from '@angular/http';

import 'rxjs/add/operator/map';
@Injectable()
export class EclipseService
 {

    constructor(private _http: Http)
    {
      
    }

     getTopics()  
     {
      return this._http.get('http://localhost:8080/topic').map(res=> res.json());
     }

     postTopic(value)
     {
       // var json = JSON.stringify({'id':'oracle','name':'oracle framework','description':'oracle description'});
       var json = JSON.stringify(value);
        var params= json;
        console.log(params);
        var headers = new Headers();
        headers.append('Content-Type','application/json');
        return this._http.post('http://localhost:8080/topic',params,{headers: headers})
        .map(res => res.json());
     }

 }