import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { retry, catchError } from 'rxjs/operators';

import { IConsultaSuc, IConsultaSucLista, IDetalleSuc1, ISucresultado } from '../interface/suc';


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

  putDataSucCrea(fechaSolicitud:string,servicio:string,responsable:string/*,motivoCompra:string*/): Observable<ISucresultado> {
    return this.http.get<ISucresultado>(`${environment.apiUrl}/PostaCentralConsultaSuc/crea/`+ fechaSolicitud+  `/`+ servicio+  `/`+ responsable+  `/`/*+ motivoCompra+  `/`*/,{ headers: this.headers })
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  putDataSucCreaArticulo(primero:string,codigoArticulo: string,detalle: string, unidadDeMedida: string, cantidadTotal: string, valorUnitario: string, montoTotal: string): Observable<ISucresultado> {
    return this.http.get<ISucresultado>(`${environment.apiUrl}/PostaCentralConsultaSuc/creaArticulo/`+ primero+  `/`+ codigoArticulo+  `/`+ detalle+  `/`+ unidadDeMedida+  `/`+ cantidadTotal+  `/`+ valorUnitario+  `/`+ montoTotal+  `/`,{ headers: this.headers })
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }
  //PostaCentralConsultaSuc/elimina/26/2/obs/1/2022-05-05
                                                //id/motivo(numerico)/'xxx'/1 siempre es 1 responsable/fecha
  putDataSucCancelar(id:string,idSuc:string,responsable:string,motivo:string,adjuntar:string,fecha:string): Observable<ISucresultado> {
    console.log('cancela',(`/PostaCentralConsultaSuc/elimina/`+ id+  `/`+ motivo+  `/`+ `valor`+  `/`+ `1`+  `/`+ fecha+  `/`));
    return this.http.get<ISucresultado>(`${environment.apiUrl}/PostaCentralConsultaSuc/elimina/`+ id+  `/`+ motivo+  `/`+ `valor`+  `/`+ `1`+  `/`+ fecha+  `/`,{ headers: this.headers })
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
