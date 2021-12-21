import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { AgregaArticuloComponent } from './agrega-articulo/agrega-articulo.component';
import { ModificaArticuloComponent } from './modifica-articulo/modifica-articulo.component';
import { ConsultaArticuloComponent } from './consulta-articulo/consulta-articulo.component';
import { EliminaArticuloComponent } from './elimina-articulo/elimina-articulo.component';
import { IArticulo } from 'src/app/interface/Arsenal';

var datos: IArticulo[] = [
  { id: 'FRM-001', 
    grupo: 'grupo001',
    subgrupo: 'subgrupo001', 
    ctrlLegal: 'controlLegal001',
    tipo: 'tipo001',
    gzen: 'gzen001',
    medicamento: 'medicamento001',
    farmaceutica: 'farmaceutica001',
    presentacion: 'presentacion001',
    dosificacion: 'dosificacion001'
  }, 
  { id: 'FRM-002', 
    grupo: 'grupo002',
    subgrupo: 'subgrupo002', 
    ctrlLegal: 'controlLegal002',
    tipo: 'tipo002',
    gzen: 'gzen002',
    medicamento: 'medicamento002',
    farmaceutica: 'farmaceutica002',
    presentacion: 'presentacion002',
    dosificacion: 'dosificacion002'
  },
  { id: 'FRM-003', 
  grupo: 'grupo003',
  subgrupo: 'subgrupo003', 
  ctrlLegal: 'controlLegal003',
  tipo: 'tipo003',
  gzen: 'gzen003',
  medicamento: 'medicamento003',
  farmaceutica: 'farmaceutica003',
  presentacion: 'presentacion003',
  dosificacion: 'dosificacion003'
  },
  { id: 'FRM-004', 
  grupo: 'grupo004',
  subgrupo: 'subgrupo004', 
  ctrlLegal: 'controlLegal004',
  tipo: 'tipo004',
  gzen: 'gzen004',
  medicamento: 'medicamento004',
  farmaceutica: 'farmaceutica004',
  presentacion: 'presentacion004',
  dosificacion: 'dosificacion004'
}
];

@Component({
  selector: 'app-Arsenal',
  templateUrl: './arsenal.component.html',
  styleUrls: ['./arsenal.component.css']
})
export class ArsenalComponent implements AfterViewInit {  

  displayedColumns: string[] = ['id', 'grupo', 'subgrupo', 'ctrlLegal', 'tipo', 'gzen', 
    'medicamento', 'farmaceutica', 'presentacion', 'dosificacion','opciones'];
  dataSource: MatTableDataSource<IArticulo>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(public dialog: MatDialog,public httpClient: HttpClient,) {
    this.dataSource = new MatTableDataSource(datos);
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

  consultaArticulo(id: string, grupo: string, subgrupo: string, ctrlLegal: string, tipo: string,
    gzen: string, medicamento: string, farmaceutica: string, presentacion: string, dosificacion: string) {

   /* datoArticulo = {
      id, grupo, subgrupo, ctrlLegal, tipo,
      gzen, medicamento, farmaceutica, presentacion, dosificacion
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