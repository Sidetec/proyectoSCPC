import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { ModificasucComponent } from './modifica-suc/modifica-suc.component';
import { ConsultasucComponent } from './consulta-suc/consulta-suc.component';
import { AgregasucComponent } from './agrega-suc/agrega-suc.component';
import { CancelarSucComponent } from './cancelarSuc/cancelar-suc.component';
import { ComprasSucService } from 'src/app/servicios/compras-suc.service';
import { IConsultaSucLista } from 'src/app/interface/suc';

import Swal from 'sweetalert2';
export interface Datos {
  Suc: string;
  Estado: string;
  Fecha: string;
  Servicio: string;
  Responsable: string;
  Motivo: string;
  MontoTotal:string;
}

/** Constants used to fill up our data base. */
const datos: Datos[] = [
  {Suc: 'SUC-001', Estado: 'Estado 1',Fecha: 'Fecha 1',Servicio: 'Servicio 1',Responsable:'Responsable 1',Motivo: 'Motivo 1',MontoTotal:''},
  {Suc: 'SUC-002', Estado: 'Estado 2',Fecha: 'Fecha 2',Servicio: 'Servicio 2',Responsable:'Responsable 2',Motivo: 'Motivo 2',MontoTotal:''},
  {Suc: 'SUC-003', Estado: 'Estado 3',Fecha: 'Fecha 3',Servicio: 'Servicio 3',Responsable:'Responsable 3',Motivo: 'Motivo 3',MontoTotal:''},
  {Suc: 'SUC-004', Estado: 'Estado 4',Fecha: 'Fecha 4',Servicio: 'Servicio 4',Responsable:'Responsable 4',Motivo: 'Motivo 4',MontoTotal:''},
  {Suc: 'SUC-005', Estado: 'Estado 5',Fecha: 'Fecha 5',Servicio: 'Servicio 5',Responsable:'Responsable 5',Motivo: 'Motivo 5',MontoTotal:''},

];
@Component({
  selector: 'app-suc',
  templateUrl: './suc.component.html',
  styleUrls: ['./suc.component.css']
})
export class sucComponent implements AfterViewInit {
  displayedColumns: string[] = ['Suc', 'Estado', 'Fecha', 'Servicio', 'Responsable', 'Motivo','MontoTotal','opciones'];
  dataSource: MatTableDataSource<Datos>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(public dialog: MatDialog,public httpClient: HttpClient,private comprasSucService:ComprasSucService) {
    // Create 100 users
   // const users = Array.from({length: 4}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(datos);
  }


  getListPac() {
    console.log('paso pac')
    this.comprasSucService
    .getDataSucLista()
    .subscribe((res: {}) => {
      console.log('suc: ', res);
    //  this.dataSource.data = res as IConsultaSucLista[];

    },
    // console.log('yo:', res as PerfilI[]),
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
  //  agregaNuevo(empresaInterface_: EmpresaI) {
    // Nuevo
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.height = '90%';
    dialogConfig.position = { top : '2%'};
    dialogConfig.data = {};
  //  dialogConfig.data = {
  //    idProducto: idProdP,
  //    titulo: tituloP
  //  };

    this.dialog.open(AgregasucComponent, dialogConfig)
    .afterClosed().subscribe(
     data => {console.log('Dialog output3333:', data);
              if (data !== undefined) {
                  this.refreshTable();
              }
      }
    );
  }

  actualizasuc() {


    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '100%';
    dialogConfig.height = '80%';
    dialogConfig.position = { top : '1%'};


    this.dialog.open(ModificasucComponent, dialogConfig)
      .afterClosed().subscribe(
       data => {console.log('Dialog output3333:', data);
                if (data !== undefined) {
                    this.refreshTable();
                }
        }
      );
  }

  consultasuc(servicio:string) {



    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    dialogConfig.height = '90%';
    dialogConfig.position = { top : '1%'};

    dialogConfig.data = servicio;
    this.dialog.open(ConsultasucComponent, dialogConfig)
      .afterClosed().subscribe(
       data => {console.log('Datoas Consulta:', data);
                if (data !== undefined) {
                    this.refreshTable();
                }
        }
      );
   }

   private refreshTable() {


    this.dataSource.paginator?._changePageSize(this.paginator.pageSize);
   }


  }


/** Builds and returns a new User. */
/*function createNewUser(id: number): UserData {
  const suc =
    SUC[Math.round(Math.random() * (SUC.length - 1))] +
    ' ' +
    SUC[Math.round(Math.random() * (SUC.length - 1))].charAt(0) +
    '.';


  return {

    Suc: suc,
    Estado: ESTADO[Math.round(Math.random() * (ESTADO.length - 1))],
    Fecha: Fecha[Math.round(Math.random() * (Fecha.length - 1))],
    Servicio: Servicio[Math.round(Math.random() * (Servicio.length - 1))],
    Responsable: Responsable[Math.round(Math.random() * (Responsable.length - 1))],
    Motivo: Motivo[Math.round(Math.random() * (Motivo.length - 1))],
  };
}*/

