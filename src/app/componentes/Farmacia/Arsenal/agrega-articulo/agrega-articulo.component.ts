import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {IArticulo} from 'src/app/interface/Arsenal';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-agrega-articulo',
  templateUrl: './agrega-articulo.component.html',
  styleUrls: ['./agrega-articulo.component.css']
})
export class AgregaArticuloComponent implements OnInit {
  
  datoArticulo: IArticulo | undefined;/*=
  {
    id: ' ', 
    grupo: ' ',
    subgrupo: ' ', 
    ctrlLegal: ' ',
    tipo: ' ',
    gzen: ' ',
    medicamento: ' ',
    farmaceutica: ' ',
    presentacion: ' ',
    dosificacion: ' '
  };*/

  constructor(private dialogRef: MatDialogRef<AgregaArticuloComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    
    }
    
    id= new FormControl('', [Validators.required]);
    grupo= new FormControl('', [Validators.required]);
    subgrupo= new FormControl('', [Validators.required]);
    ctrlLegal= new FormControl('', [Validators.required]);
    tipo= new FormControl('', [Validators.required]);
    gzen= new FormControl('', [Validators.required]);
    medicamento= new FormControl('', [Validators.required]);
    farmaceutica= new FormControl('', [Validators.required]);
    presentacion= new FormControl('', [Validators.required]);
    dosificacion= new FormControl('', [Validators.required]);;
  
  public ingresoArticulo: FormGroup = new FormGroup({
    id: this.id,
    grupo: this.grupo,
    subgrupo: this.subgrupo,
    ctrlLegal: this.ctrlLegal,
    tipo: this.tipo,
    gzen: this.gzen,
    medicamento: this.medicamento,
    farmaceutica: this.farmaceutica,
    presentacion: this.presentacion,
    dosificacion: this.dosificacion, 
  });

  getErrorMessage(campo: string) {

    if (campo === 'id'){
        return this.id.hasError('required') ? 'Debe ingresar ID del artículo' : '';
    }
    if (campo === 'grupo'){
        return this.grupo.hasError('required') ? 'Debe ingresar el grupo del artículo' : '';
    }
    if (campo === 'suggrupo'){
        return this.subgrupo.hasError('required') ? 'Debe ingresar subgrupo Artículo' : '';
    }
    if (campo === 'ctrlLegal'){
        return this.ctrlLegal.hasError('required') ? 'Debe ingresar control legal del artículo' : '';
    }
    if (campo === 'tipo'){
        return this.tipo.hasError('required') ? 'Debe ingresar el tipo de artículo' : '';
    }
    if (campo === 'gzen'){
      return this.gzen.hasError('required') ? 'Debe ingresar código GZEN de artículo' : '';
    }
    if (campo === 'medicamento'){
      return this.medicamento.hasError('required') ? 'Debe ingresar el nombre del medicamento' : '';
    }

    if (campo === 'farmaceutica'){
      return this.farmaceutica.hasError('required') ? 'Debe ingresar la farmacéutica que produce el medicamento' : '';
    }

    if (campo === 'presentacion'){
      return this.presentacion.hasError('required') ? 'Debe ingresar la presentación del artículo' : '';
    }

    if (campo === 'dosificacion'){
      return this.dosificacion.hasError('required') ? 'Debe ingresar dosificación del artículo' : '';
    }
    return '';
  }

  ngOnInit() {
  }

  enviar() {

      Swal.fire(
        'Actualizado',
        'Click en Botón!',
        'info'
      );

    }

  cerrar() {
    this.dialogRef.close();
  }

}