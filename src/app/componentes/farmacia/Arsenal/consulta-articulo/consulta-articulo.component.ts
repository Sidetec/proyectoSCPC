
import {AfterViewInit, Component} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-consulta-articulo',
  templateUrl: './consulta-articulo.component.html',
  styleUrls: ['./consulta-articulo.component.css']
})
export class ConsultaArticuloComponent implements AfterViewInit {

/*  datoConsultaArticulo: IArticulo[] = [
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
*/
displayedColumns: string[] = ['articulo','cantidad','descripcion','codigoGzen', 'grupo', 
  'subGrupo', 'controlLegal', 'tipo', 'medicamento', 'fFarmacia', 'presentacion', 
  'dosificacion', 'restricciones', 'alternativa','observaciones','opciones'];

  constructor(public dialog: MatDialog, public httpClient: HttpClient,
    private dialogRef: MatDialogRef<ConsultaArticuloComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    
  }

  codigoGzen= new FormControl(this.data.codigoGzen, [Validators.required]);
  grupo= new FormControl(this.data.grupo, [Validators.required]);
  subGrupo= new FormControl(this.data.subGrupo, [Validators.required]);
  controlLegal= new FormControl(this.data.controlLegal, [Validators.required]);
  tipo= new FormControl(this.data.tipo, [Validators.required]);
  medicamento= new FormControl(this.data.medicamento, [Validators.required]);
  fFarmacia= new FormControl(this.data.fFarmacia, [Validators.required]);
  presentacion= new FormControl(this.data.presentacion, [Validators.required]);
  dosificacion= new FormControl(this.data.dosificacion, [Validators.required]);
  restricciones= new FormControl(this.data.restricciones, [Validators.required]);
  alternativa= new FormControl(this.data.alternativa, [Validators.required]);
  observaciones= new FormControl(this.data.observaciones, [Validators.required]);;
  ngOnInit() {
    
  }

  ngAfterViewInit() {
    
  }

  applyFilter(event: Event) {
   
  }

  cerrar() {
    this.dialogRef.close();
  }
}
