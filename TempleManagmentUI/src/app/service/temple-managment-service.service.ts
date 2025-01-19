import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TempleManagmentServiceService {

  constructor(private _http:HttpClient ) {


   }

   GetTempleData():Observable<any>{

   return this._http.get("https://localhost:7160/api/TempleManagment");
   }
}
