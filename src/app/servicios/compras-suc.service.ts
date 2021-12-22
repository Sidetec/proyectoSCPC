import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { retry, catchError } from 'rxjs/operators';

import { IConsultaSuc, IConsultaSucLista, IDetalleSuc1 } from '../interface/suc';


@Injectable({
  providedIn: 'root'
})
export class ComprasSucService {

  constructor(private http: HttpClient) { }

  headers: HttpHeaders = new HttpHeaders({
    /*  Authorization: this.authenticationService.getToken()*/
    'Content-Type': 'application/json'
    });



  getDataSucLista(): Observable<IConsultaSucLista> {
    return this.http.get<IConsultaSucLista>(`${environment.apiUrl}/PostaCentralConsultaSuc/consulta`, { headers: this.headers })
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  getDataSucDetalle1(parametro1:string): Observable<IDetalleSuc1> {
    return this.http.get<IDetalleSuc1>(`${environment.apiUrl}/PostaCentralConsultaSuc/consultaId/`+ parametro1 , { headers: this.headers })
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  getDataSucDetalle2(parametro1:string): Observable<IConsultaSuc> {
    return this.http.get<IConsultaSuc>(`${environment.apiUrl}/PostaCentralConsultaSuc/consulta/`+ parametro1 , { headers: this.headers })
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
