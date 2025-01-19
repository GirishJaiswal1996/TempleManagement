import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TempleManagmentServiceService {
  private apiUrl = 'https://localhost:7160/api/TempleManagment';

  constructor(private _http: HttpClient) {}

  GetTempleData(): Observable<any> {
    return this._http.get(this.apiUrl, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        if (response.status === 200) {
          // If the response status is 200, return the response body
          return response.body;
        } else {
          // Handle other status codes as needed
          throw new Error(`Unexpected status code: ${response.status}`);
        }
      }),
      catchError((error) => {
        console.error('Error occurred:', error.message);
        return throwError(() => new Error('Failed to fetch temple data.'));
      })
    );
  }
}