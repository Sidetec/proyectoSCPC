import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { AgregaPacComponent } from './agrega-pac/agrega-pac.component';
import {MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

import { ModificaPacComponent } from './modifica-pac/modifica-pac.component';
import { ConsultaPacComponent } from './consulta-pac/consulta-pac.component';
import { AlertasComponent } from './alertas/alertas.component';
import { IAlertas, IListaPac } from 'src/app/interface/Pac';

import Swal from 'sweetalert2';
import { ComprasPacService } from 'src/app/servicios/compras-pac.service';
import * as moment from 'moment';

@Component({
  selector: 'app-pac',
  templateUrl: './pac.component.html',
  styleUrls: ['./pac.component.css']
})
export class PacComponent implements AfterViewInit, OnInit {

  //fechaActual: string = moment(Date.now()).format("DD-MM-YYYY");
  displayedColumns: string[] = ['id','pac', 'servicio', 'solicitados','comprados','pendientes','consumidos','disponibles','opciones'];
  dataSource: MatTableDataSource<IListaPac>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  show=true;

  constructor(public dialog: MatDialog,public httpClient: HttpClient,private comprasPacService:ComprasPacService) {
    this.dataSource = new MatTableDataSource<IListaPac>();
  }

  ngOnInit() {
    this.getAlertas();
    this.getListPac();
  }
  getAlertas(){
    this.comprasPacService.getAlerta()
    .subscribe( (resp: {}) => {
      console.log('pac: ', resp);
      let alertas = resp as IAlertas;
      let hoy = new Date();
      //let hoy = moment(this.fechaActual,'MM-DD-YYYY');
      //let inicio = moment(alertas.fechaInicio,'MM-DD-YYYY');
      //let fin = moment(alertas.fechaTermino,'MM-DD-YYYY');
      //console.log('Hoy: ',this.fechaActual)
      let inicio = new Date(alertas.fechaInicio);
      let fin = new Date(alertas.fechaTermino);
      console.log('Hoy: ',hoy);
      console.log('Día de Hoy: ',hoy.getDate());
      console.log('Inicio: ',inicio);
      console.log('Día de Inicio: ',inicio.getDate());
      console.log('Fin: ',fin);
      console.log('Día del Fin: ',fin.getDate());
      if( hoy >= inicio && hoy < fin ){
        if( fin.getDate()+1 - hoy.getDate() == parseInt(alertas.vencTercerAviso) ){
          Swal.fire(
            'Resta 1 día para finalizar el período de creación de PAC',
            'Click en botón!',
            'success'
         );
        }else if( fin.getDate()+1 - hoy.getDate() == parseInt(alertas.vencSegundoAviso) ){
          Swal.fire(
            'Restan 3 días para finalizar el período de creación de PAC',
            'Cerrar',
            'success'
         );
        }else if( fin.getDate()+1 - hoy.getDate() == parseInt(alertas.vencPrimerAviso) ){
          Swal.fire(
            'Restan 7 días para finalizar el período de creación de PAC',
            'Click en botón!',
            'success'
         );
        }else{
            Swal.fire(
              'El período de creación de PAC está abierto',
              'Click en botón!',
              'success'
           );
        }
      }

    },
      error => {
        console.log('error carga:', error);
        Swal.fire(
          'ERROR INESPERADO',
          error,
         'info'
       );
      }
    );
  }

  getListPac() {
    console.log('paso pac')
    this.comprasPacService
    .getDataPacLista()
    .subscribe((res: {}) => {
      console.log('pac: ', res);
      this.dataSource.data = res as IListaPac[];
    },
    error => {
      console.log('error carga:', error);
      Swal.fire(
        'ERROR INESPERADO',
        error,
       'info'
     );
    }
  );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  agregaNuevo() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.height = '90%';
    dialogConfig.position = { top : '2%'};
    dialogConfig.data = {};

    this.dialog.open(AgregaPacComponent, dialogConfig)
    .afterClosed().subscribe(
     data => {console.log('Dialog output3333:', data);
              if (data !== undefined) {
                  this.refreshTable();
              }
      }
    );
  }

  actualizaPac() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.height = '95%';
    dialogConfig.position = { top : '2%'};

    this.dialog.open(ModificaPacComponent, dialogConfig)
      .afterClosed().subscribe(
       data => {console.log('Dialog output3333:', data);
                if (data !== undefined) {
                    this.refreshTable();
                }
        }
      );
  }

  consultaPac(id:string) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '100%';
    dialogConfig.height = '90%';
    dialogConfig.position = { top : '1%'};

    dialogConfig.data = id;
    this.dialog.open(ConsultaPacComponent, dialogConfig)
      .afterClosed().subscribe(
       data => {console.log('Datoas Consulta:', data);
                if (data !== undefined) {
                    this.refreshTable();
                }
        }
      );
   }

  private refreshTable() {

    this.getListPac();
   this.dataSource.paginator?._changePageSize(this.paginator.pageSize);
  }

  alertas(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.height = '95%';
    dialogConfig.position = { top : '2%'};

    this.dialog.open(AlertasComponent, dialogConfig)
      .afterClosed().subscribe(
       data => {console.log('Dialog output3333:', data);
                if (data !== undefined) {
                    this.refreshTable();
                }
        }
      );
  }
}

/** Builds and returns a new User. */
/*function createNewUser(id: number): UserData {
  const pac =
    PAC[Math.round(Math.random() * (PAC.length - 1))] +
    ' ' +
    PAC[Math.round(Math.random() * (PAC.length - 1))].charAt(0) +
    '.';


  return {

    pac: pac,
    servicio: SERVICIO[Math.round(Math.random() * (SERVICIO.length - 1))],
    columna1: CAMPO1[Math.round(Math.random() * (CAMPO1.length - 1))],
    columna2: CAMPO2[Math.round(Math.random() * (CAMPO2.length - 1))],
    columna3: CAMPO3[Math.round(Math.random() * (CAMPO3.length - 1))]
  };
}

*/
