import { Injectable } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { retry, catchError } from 'rxjs/operators';
//import { LoaderEnabled } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class MenuLateralService {

  public appDrawer: any;
  public currentUrl = new BehaviorSubject<string>('undefined');

  constructor(private router: Router, private http: HttpClient) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl.next(event.urlAfterRedirects);
      }
    });
  }

  headers: HttpHeaders = new HttpHeaders({
    /*  Authorization: this.authenticationService.getToken()*/
    });

     headersPerfil: HttpHeaders = new HttpHeaders({
      "auth-key": "mJ9NH2gRPf88ziYEtbEzZOIQKW7WpqtzCwLWXONt"
      });

  public closeNav() {
    this.appDrawer.close();
  }

  public openNav() {
    this.appDrawer.open();
  }

  /*
  @LoaderEnabled()
  getDataMenu(usuario: string): Observable<IMenuLateralBase> {
    return this.http.get<IMenuLateralBase>(`${environment.apiUrl}/ApiGestionInterna/consultaInterna/` + usuario, { headers: this.headers })
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }
*/


}

