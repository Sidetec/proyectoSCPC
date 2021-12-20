import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

import { IConsultaOc } from 'src/app/interface/oc';
@Component({
  selector: 'app-consulta-occ',
  templateUrl: './consulta-oc.component.html',
  styleUrls: ['./consulta-oc.component.css']
})
export class ConsultaOcComponent implements AfterViewInit {

  iva=964;
  resultado=0;

//datoConsultaPac:  IConsultaPac | undefined;

datoConsultaOc: IConsultaOc[] = [

  {codigoArticulo: '', detalle: '',   unidadDeMedida: '', catidadTotal: 0,  valorUnitario: 0,  montoTotal: 0}

  ];

  displayedColumns: string[] = ['codigoArticulo', 'detalle',   'unidadDeMedida', 'catidadTotal',  'valorUnitario',  'montoTotal'];
  dataSource: MatTableDataSource<IConsultaOc>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(public dialog: MatDialog,public httpClient: HttpClient,private dialogRef: MatDialogRef<ConsultaOcComponent>,) {
    // Create 100 users
    //const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.datoConsultaOc);
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
  getTotalCost() {
    return this.datoConsultaOc.map(t => t.montoTotal).reduce((acc, value) => acc + value, 0);
 }

 getTotalCostIva() {
  return this.resultado= (this.datoConsultaOc.map(t => t.montoTotal).reduce((acc, value) => acc + value, 0) + this.iva);
}

  }


