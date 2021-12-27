import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getInsArticulo(articulo:IArtFarm): Observable<number> {
    return this.http.get<number>(`${environment.apiUrl}/PostaCentralArsenalFarmac/crear/`+
      articulo.controlLegal +'/'+ articulo.grupo +'/'+ articulo.subGrupo +'/'+ articulo.tipo +'/'+
      articulo.codigoGzen +'/'+ articulo.medicamento +'/'+ articulo.fFarmacia +'/'+
      articulo.presentacion +'/'+ articulo.dosificacion +'/'+ articulo.restricciones +'/'+
      articulo.alternativa +'/'+ articulo.observaciones, { headers: this.headers })
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
