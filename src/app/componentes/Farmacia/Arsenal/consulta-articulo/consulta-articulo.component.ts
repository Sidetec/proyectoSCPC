
import {AfterViewInit, Component, Inject, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { IArticulo } from 'src/app/interface/arsenal';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-consulta-articulo',
  templateUrl: './consulta-articulo.component.html',
  styleUrls: ['./consulta-articulo.component.css']
})
export class ConsultaArticuloComponent implements AfterViewInit {

  /*datoConsultaArticulo: IArticulo[] = [
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
  ];*/
  show = true;
  datos: IArticulo | undefined;

  displayedColumns: string[] = 
    ['articulo','cantidad', 'descripcion', 'ctrlLegal', 'grupo', 'subgrupo', 
     'tipo', 'gzen', 'medicamento', 'farmaceutica', 'presentacion', 'dosificacion',
     'restricciones', 'altTerapeutica', 'observaciones','opciones'];

  constructor(public dialog: MatDialog,public httpClient: HttpClient,private dialogRef: MatDialogRef<ConsultaArticuloComponent>
    ,@Inject(MAT_DIALOG_DATA) public data: any) {

      this.datos = data;
  }
  gzen = new FormControl('', [Validators.required]);
  ctrlLegal= new FormControl('', [Validators.required]);
  grupo= new FormControl('', [Validators.required]);
  subgrupo= new FormControl('', [Validators.required]);
  tipo= new FormControl('', [Validators.required]);
  medicamento= new FormControl('', [Validators.required]);
  farmaceutica= new FormControl('', [Validators.required]);
  presentacion= new FormControl('', [Validators.required]);
  dosificacion= new FormControl('', [Validators.required]);
  restricciones= new FormControl('', [Validators.required]);
  altTerapeutica= new FormControl('', [Validators.required]);
  observaciones= new FormControl('', [Validators.required]);

  public configuraAlerta: FormGroup = new FormGroup({
    gzen: this.gzen,
    ctrlLegal: this.ctrlLegal,
    grupo: this.grupo,
    subgrupo: this.subgrupo,
    tipo: this.tipo,
    medicamento: this.medicamento,
    farmaceutica: this.farmaceutica,
    presentacion: this.presentacion,
    dosificacion: this.dosificacion,
    restricciones: this.restricciones,
    altTerapeutica: this.altTerapeutica,
    observaciones: this.observaciones
  });

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  cerrar() {
    this.dialogRef.close();
  }
}
