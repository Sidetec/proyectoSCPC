
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { ReporteDepreciacionComponent } from '../reporte-depreciacion/reporte-depreciacion.component';
import { AlertaActivoComponent } from '../alerta-activo/alerta-activo.component';
import { DocumentosAsociadosComponent } from '../documentos-asociados/documentos-asociados.component';

import { IConsultaActivoFijo } from 'src/app/interface/activoFijo';
import { MantencionArchivoComponent } from '../mantencion-archivo/mantencion-archivo.component';
import { IngresoComponent } from '../reporte-depreciacion/ingreso/ingreso.component';
@Component({
  selector: 'app-consulta-activo-fijo',
  templateUrl: './consulta-activo-fijo.component.html',
  styleUrls: ['./consulta-activo-fijo.component.css']
})
export class ConsultaActivoFijoComponent implements AfterViewInit {


datoConsultaSuc: IConsultaActivoFijo[] = [

  {codigo:'',marca:'',modelo:'',descripcion:'',vidaUtil:''}
  ];

  displayedColumns: string[] = ['codigo', 'marca', 'modelo', 'descripcion',  'vidaUtil'];
  dataSource: MatTableDataSource<IConsultaActivoFijo>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(public dialog: MatDialog,public httpClient: HttpClient,private dialogRef: MatDialogRef<ConsultaActivoFijoComponent>,) {
    // Create 100 users
    //const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.datoConsultaSuc);
  }


  resumenDepreciacion() {



    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '100%';
    dialogConfig.height = '90%';
    dialogConfig.position = { top : '1%'};

    this.dialog.open(IngresoComponent, dialogConfig)
      .afterClosed().subscribe(
       data => {console.log('Datos Consulta:', data);
                if (data !== undefined) {
                    this.refreshTable();
                }
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

  consultaMantenciones() {



    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '100%';
    dialogConfig.height = '90%';
    dialogConfig.position = { top : '1%'};

    this.dialog.open(MantencionArchivoComponent, dialogConfig)
      .afterClosed().subscribe(
       data => {console.log('Datoas Consulta:', data);
                if (data !== undefined) {
                    this.refreshTable();
                }
        }
      );

   }

   alertasActivo() {



    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '100%';
    dialogConfig.height = '90%';
    dialogConfig.position = { top : '1%'};

    this.dialog.open(AlertaActivoComponent, dialogConfig)
      .afterClosed().subscribe(
       data => {console.log('Datoas Consulta:', data);
                if (data !== undefined) {
                    this.refreshTable();
                }
        }
      );

   }

   documentos() {



    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '100%';
    dialogConfig.height = '90%';
    dialogConfig.position = { top : '1%'};

    this.dialog.open(DocumentosAsociadosComponent, dialogConfig)
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



  cerrar() {
    this.dialogRef.close();
  }

  }




