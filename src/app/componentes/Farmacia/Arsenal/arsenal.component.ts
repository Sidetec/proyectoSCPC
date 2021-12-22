import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatSnackBar} from '@angular/material//snack-bar';
import {MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { AgregaArticuloComponent } from './agrega-articulo/agrega-articulo.component';
import { ModificaArticuloComponent } from './modifica-articulo/modifica-articulo.component';
import { ConsultaArticuloComponent } from './consulta-articulo/consulta-articulo.component';
import { EliminaArticuloComponent } from './elimina-articulo/elimina-articulo.component';
import { ListaArsenalService } from 'src/app/servicios/farmacia.service';
import { IArticulo } from 'src/app/interface/Arsenal';
import Swal from 'sweetalert2';


/*var datos: IArticulo[] = [
  { 
    gzen: 'gzen001',
    grupo: 'G001',
    subgrupo: 'SG001', 
    ctrlLegal: 'ctrl001',
    tipo: 'tipo001',
    medicamento: 'medicamento001',
    farmaceutica: 'farmaceutica001',
    presentacion: 'presentacion001',
    dosificacion: 'dosificacion001',
    restricciones: 'restricciones001',
    altTerapeutica: 'altTerapeutica001',
    observaciones: 'observaciones001'
  }, 
  { 
    gzen: 'gzen002', 
    grupo: 'G002',
    subgrupo: 'SG002', 
    ctrlLegal: 'ctrl002',
    tipo: 'tipo002',
    medicamento: 'medicamento002',
    farmaceutica: 'farmaceutica002',
    presentacion: 'presentacion002',
    dosificacion: 'dosificacion002',
    restricciones: 'restricciones002',
    altTerapeutica: 'altTerapeutica002',
    observaciones: 'observaciones002'
  },
  { 
    gzen: 'gzen003',
    grupo: 'G003',
    subgrupo: 'SG003', 
    ctrlLegal: 'ctrl003',
    tipo: 'tipo003',
    medicamento: 'medicamento003',
    farmaceutica: 'farmaceutica003',
    presentacion: 'presentacion003',
    dosificacion: 'dosificacion003',
    restricciones: 'restricciones003',
    altTerapeutica: 'altTerapeutica003',
    observaciones: 'observaciones003'
  },
  {   
    gzen: 'gzen004',
    grupo: 'G004',
    subgrupo: 'SG004', 
    ctrlLegal: 'ctrl004',
    tipo: 'tipo004',
    medicamento: 'medicamento004',
    farmaceutica: 'farmaceutica004',
    presentacion: 'presentacion004',
    dosificacion: 'dosificacion004',
    restricciones: 'restricciones004',
    altTerapeutica: 'altTerapeutica004',
    observaciones: 'observaciones004'
}
];*/

@Component({
  selector: 'app-Arsenal',
  templateUrl: './arsenal.component.html',
  styleUrls: ['./arsenal.component.css']
})
export class ArsenalComponent implements AfterViewInit {  
  show = true;
  displayedColumns: string[] = ['gzen', 'grupo', 'subgrupo', 'ctrlLegal', 'tipo', 
    'medicamento', 'farmaceutica', 'presentacion', 'dosificacion','restricciones',
    'altTerapeutica','observaciones','opciones'];
  dataSource: MatTableDataSource<IArticulo>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(  private listaArsenalService: ListaArsenalService,
                public dialog: MatDialog,
                public httpClient: HttpClient,) {
    //this.dataSource = new MatTableDataSource(datos);
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
    // console.log('yo:', res as PerfilI[]),
    error => {
      console.log('error carga:', error);
      Swal.fire(
        'ERROR INESPERADO',
        error,
       'info'
     );
    }
  ); // (this.dataSource.data = res as PerfilI[])
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
              if (data !== undefined) {
                  this.refreshTable();
              }
      }
    );
  }

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

  consultaArticulo(gzen: string, grupo: string, subgrupo: string, ctrlLegal: string, tipo: string,
    medicamento: string, farmaceutica: string, presentacion: string, dosificacion: string,
     restricciones:string, altTerapuetica: string, observaciones: string) {

    /*datoArticulo = {
      gzen, grupo, subgrupo, ctrlLegal, tipo,
      medicamento, farmaceutica, presentacion, dosificacion,
      restricciones, altTerapuetica, observaciones
    };*/

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '100%';
    dialogConfig.height = '90%';
    dialogConfig.position = { top : '1%'};

    //dialogConfig.data = this.datoArticulo;
    this.dialog.open(ConsultaArticuloComponent, dialogConfig)
      .afterClosed().subscribe(
       data => {console.log('Datos Consulta:', data);
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

   private refreshTable() {

   this.dataSource.paginator?._changePageSize(this.paginator.pageSize);
  }
}