import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

import { ListaArsenalService } from 'src/app/servicios/farmacia.service';
import { IArticulo } from 'src/app/interface/arsenal';
import Swal from 'sweetalert2';
import { AgregaArticuloComponent } from './agrega-articulo/agrega-articulo.component';
import { ConsultaArticuloComponent } from './consulta-articulo/consulta-articulo.component';

@Component({
  selector: 'app-arsenal',
  templateUrl: './arsenal.component.html',
  styleUrls: ['./arsenal.component.css']
})
export class ArsenalComponent implements AfterViewInit {
  show = true;
  datos: IArticulo | undefined;

  displayedColumns: string[] = ['articulo','cantidad','descripcion','codigoGzen', 'grupo', 
    'subGrupo', 'controlLegal', 'tipo', 'medicamento', 'fFarmacia', 'presentacion', 
    'dosificacion', 'restricciones', 'alternativa','observaciones','opciones'];
  dataSource: MatTableDataSource<IArticulo>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(  private listaArsenalService: ListaArsenalService,
                public dialog: MatDialog,
                public httpClient: HttpClient,) {
    
    this.dataSource = new MatTableDataSource<IArticulo>();
  }

ngOnInit() {
  this.getListArsenal();
}

getListArsenal(): void {
  this.listaArsenalService
    .getDataArsenalLista()
    .subscribe((res: {}) => {
      console.log('Artículos: ', res);
      this.dataSource.data = res as IArticulo[];
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

    this.dialog.open(AgregaArticuloComponent, dialogConfig)
    .afterClosed().subscribe(
     data => {console.log('Datos agregados:', data);
     // if (data !== undefined) {
      this.refreshTable();
     //}
      }
    );
  }

  consultaArticulo(articulo: string, cantidad: number, descripcion: string, codigoGzen: string, 
    grupo: string, subGrupo: string, controlLegal: string, tipo: string, medicamento: string, 
    fFarmacia: string, presentacion: string, dosificacion: string, restricciones:string, 
    alternativa: string, observaciones: string) {

    this.datos = { 
      articulo, cantidad, descripcion, codigoGzen, grupo, subGrupo, controlLegal, tipo, medicamento, 
      fFarmacia, presentacion, dosificacion, restricciones, alternativa, observaciones
    };

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '100%';
    dialogConfig.height = '90%';
    dialogConfig.position = { top : '1%'};

    dialogConfig.data = this.datos;
    this.dialog.open(ConsultaArticuloComponent, dialogConfig)
      .afterClosed().subscribe(
       data => {console.log('Datos Consulta:', data);
                if (data !== undefined) {
                    this.refreshTable();
                }
        }
      );
  }

/*
  actualizaArticulo() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.height = '95%';
    dialogConfig.position = { top : '2%'};

    this.dialog.open(ModificaArticuloComponent, dialogConfig)
      .afterClosed().subscribe(
       data => {console.log('Datos modificados:', data);
                if (data !== undefined) {
                    this.refreshTable();
                }
        }
      );
  }
  
   eliminaArticulo(id: string) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.height = '95%';
    dialogConfig.position = { top : '2%'};

    dialogConfig.data = id;
    this.dialog.open(EliminaArticuloComponent, dialogConfig)
      .afterClosed().subscribe(
       data => {console.log('Datos eliminados:', data);
                if (data !== undefined) {
                    this.refreshTable();
                }
        }
      );
  }
*/
   private refreshTable() {
   this.dataSource.paginator?._changePageSize(this.paginator.pageSize);
  }
}
