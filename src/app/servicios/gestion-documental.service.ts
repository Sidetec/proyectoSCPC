import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { retry, catchError } from 'rxjs/operators';
import { IGestionDocumentalLista } from '../interface/gestionDocumental';
@Injectable({
  providedIn: 'root'
})
export class GestionDocumentalService {

  constructor(private http: HttpClient) { }

  headers: HttpHeaders = new HttpHeaders({
    /*  Authorization: this.authenticationService.getToken()*/
    'Content-Type': 'application/json'
    });



  getDataSucLista(): Observable<IGestionDocumentalLista> {
    return this.http.get<IGestionDocumentalLista>(`${environment.apiUrl}/PostaCentralActivoFijo/documentos/0`, { headers: this.headers })
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }


  errorHandl(error: { error: { message: string; }; status: any; message: any; }) {
    console.log('paso error: ', error);
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
