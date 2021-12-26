import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { retry, catchError } from 'rxjs/operators';
import { IArticuloOc, IConsultaOcLista, IDetalleOc1, IOcresultado } from '../interface/oc';


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
    return this.http.get<IConsultaOcLista>(`${environment.apiUrl}/PostaCentralConsultaOC/consulta`, { headers: this.headers })
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }
  //Los trae todo... hay que filtrar
  getDataOcDetalle1(): Observable<IDetalleOc1> {
    return this.http.get<IDetalleOc1>(`${environment.apiUrl}/PostaCentralConsultaOC/consultaid/null/null/suc`, { headers: this.headers })
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }


  getDataOcDetalle2(parametro1:string): Observable<IArticuloOc> {
    console.log('parametro2',parametro1)
    return this.http.get<IArticuloOc>(`${environment.apiUrl}/PostaCentralConsultaOC/articulos/`+ parametro1 , { headers: this.headers })
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  putDataOcCrea(tipoDocumentoAsociado:string,numDocumentoAsociado:string,formatoDate:string, empresa:string,rut:string,descripcion:string,direccionEnvioFactura:string,direccionDespacho:string,formaPago:string): Observable<IOcresultado> {
    return this.http.get<IOcresultado>(`${environment.apiUrl}/PostaCentralConsultaOc/crear/`+ tipoDocumentoAsociado+  `/`+numDocumentoAsociado+  `/`+formatoDate+  `/`+ empresa+  `/`+rut+  `/`+descripcion+  `/`+direccionEnvioFactura+  `/`+direccionDespacho+  `/`+formaPago,{ headers: this.headers })
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  putDataOcCreaArticulo(id:string,codigoArticulo: string, cantidadTotal: string, valorUnitario: string): Observable<IOcresultado> {
    return this.http.get<IOcresultado>(`${environment.apiUrl}/PostaCentralConsultaOc/crear/`+  id+  `/`+  codigoArticulo+  `/`+ cantidadTotal+  `/`+ valorUnitario+  `/`,{ headers: this.headers })
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
