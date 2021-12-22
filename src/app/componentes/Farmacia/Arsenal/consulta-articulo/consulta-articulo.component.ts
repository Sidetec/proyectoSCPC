
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

import { IArticulo } from 'src/app/interface/Arsenal';

@Component({
  selector: 'app-consulta-articulo',
  templateUrl: './consulta-articulo.component.html',
  styleUrls: ['./consulta-articulo.component.css']
})
export class ConsultaArticuloComponent implements AfterViewInit {

  datoConsultaArticulo: IArticulo[] = [
    { 
      gzen: 'gzen001',
      grupo: 'grupo001',
      subgrupo: 'subgrupo001', 
      ctrlLegal: 'controlLegal001',
      tipo: 'tipo001',
      medicamento: 'medicamento001',
      farmaceutica: 'farmaceutica001',
      presentacion: 'presentacion001',
      dosificacion: 'dosificacion001',
      restricciones: 'restricciones001',
      altTerapeutica: 'altTerapeutica001',
      observaciones: 'observaciones001'
    }
  ];

  displayedColumns: string[] = ['gzen', 'grupo', 'subgrupo', 'ctrlLegal', 'tipo', 
  'medicamento', 'farmaceutica', 'presentacion', 'dosificacion', 'restriccionres',
  'altTerapeutica','observaciones','opciones'];
  dataSource: MatTableDataSource<IArticulo>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(public dialog: MatDialog,public httpClient: HttpClient,private dialogRef: MatDialogRef<ConsultaArticuloComponent>,) {
    this.dataSource = new MatTableDataSource(this.datoConsultaArticulo);
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

  private refreshTable() {

   this.dataSource.paginator?._changePageSize(this.paginator.pageSize);
  }

  cerrar() {
    this.dialogRef.close();
  }
}
