import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { retry, catchError } from 'rxjs/operators';
import { IAlertas, IConsultaPac, IDetallePac1, IListaPac } from '../interface/Pac';



@Injectable({
  providedIn: 'root'
})
export class ComprasPacService {

  constructor(private http: HttpClient) { }

  headers: HttpHeaders = new HttpHeaders({
    /*  Authorization: this.authenticationService.getToken()*/
    'Content-Type': 'application/json'
    });



  getDataPacLista(): Observable<IListaPac> {
    return this.http.get<IListaPac>(`${environment.apiUrl}/PostaCentralConsultaPac/consulta`, { headers: this.headers })
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  getAlerta(): Observable<IAlertas> {
    return this.http.get<IAlertas>(`${environment.apiUrl}/PostaCentralConsultaAlertas/alerta/PAC`, { headers: this.headers })
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  getDataPacDetalle1(parametro1:string): Observable<IDetallePac1> {
    return this.http.get<IDetallePac1>(`${environment.apiUrl}/PostaCentralConsultaPac/consultaId/`+ parametro1 , { headers: this.headers })
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  getDataPacDetalle2(parametro1:string): Observable<IConsultaPac> {
    return this.http.get<IConsultaPac>(`${environment.apiUrl}/PostaCentralConsultaDetallePac/consulta/`+ parametro1 , { headers: this.headers })
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
