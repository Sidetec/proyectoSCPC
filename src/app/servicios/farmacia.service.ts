import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { retry, catchError } from 'rxjs/operators';
import { IArtFarm, IArticulo, IResultado } from '../interface/arsenal';

@Injectable({
  providedIn: 'root'
})
export class ListaArsenalService {

  constructor(private http: HttpClient) { }

  headers: HttpHeaders = new HttpHeaders({
    /*  Authorization: this.authenticationService.getToken()*/
    'Content-Type': 'application/json'
    });

  getDataArsenalLista(): Observable<IArticulo> {
    return this.http.get<IArticulo>(`${environment.apiUrl}/PostaCentralArsenalFarmac/farmacias/`, { headers: this.headers })
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  getDelArticulo(gzen:string): Observable<IResultado> {
    return this.http.get<IResultado>(`${environment.apiUrl}/PostaCentralArsenalFarmac/eliminar/5896/`+ gzen , { headers: this.headers })
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  getInsArticulo(articulo:IArtFarm): Observable<IResultado> {
    return this.http.get<IResultado>(`${environment.apiUrl}/PostaCentralArsenalFarmac/crear/1/2/2/3/4/5/6/7/8/9/10/11/`+ articulo , { headers: this.headers })
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
