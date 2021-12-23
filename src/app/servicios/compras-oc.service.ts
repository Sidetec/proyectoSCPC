import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { retry, catchError } from 'rxjs/operators';
import { IArticuloOc, IConsultaOcLista, IDetalleOc1 } from '../interface/oc';


@Injectable({
  providedIn: 'root'
})
export class ComprasOcService {

  constructor(private http: HttpClient) { }

  headers: HttpHeaders = new HttpHeaders({
    /*  Authorization: this.authenticationService.getToken()*/
    'Content-Type': 'application/json'
    });



  getDataOcLista(): Observable<IConsultaOcLista> {
    return this.http.get<IConsultaOcLista>(`${environment.apiUrl}/PostaCentralConsultaPac/consulta`, { headers: this.headers })
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  getDataPacDetalle1(parametro1:string): Observable<IDetalleOc1> {
    return this.http.get<IDetalleOc1>(`${environment.apiUrl}/PostaCentralConsultaOc/consultaId/`+ parametro1 , { headers: this.headers })
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  getDataPacDetalle2(parametro1:string): Observable<IArticuloOc> {
    return this.http.get<IArticuloOc>(`${environment.apiUrl}/PostaCentralConsultaDetalleOc/consulta/`+ parametro1 , { headers: this.headers })
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
