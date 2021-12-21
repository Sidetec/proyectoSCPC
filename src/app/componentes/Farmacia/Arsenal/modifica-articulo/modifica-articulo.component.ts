import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
//import { timeStamp } from 'console';
import { IArticulo } from 'src/app/interface/Arsenal';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-modifica-articulo',
  templateUrl: './modifica-articulo.component.html',
  styleUrls: ['./modifica-articulo.component.css']
})
export class ModificaArticuloComponent implements OnInit {

  datoArticulo: IArticulo = {
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
  };

  constructor(private dialogRef: MatDialogRef<ModificaArticuloComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any){
        this.datoArticulo = data;
      }
      /*id: this.id,
         nombre: this.nombre,
         descripcion: this.descripcion,
         ctrlLegal: this.ctrlLegal,
        tempIdeal: this.tempIdeal,
      cantidad: this.cantidad
      */
    id = new FormControl(this.data.id, [Validators.required]);
    grupo = new FormControl(this.data.grupo, [Validators.required]);
    subgrupo = new FormControl(this.data.subgrupo, [Validators.required]);
    ctrlLegal = new FormControl(this.data.ctrlLegal, [Validators.required]);
    tipo = new FormControl(this.data.tipo, [Validators.required]);
    gzen = new FormControl(this.data.gzen, [Validators.required]);
    medicamento = new FormControl(this.data.medicamento, [Validators.required]);
    farmaceutica = new FormControl(this.data.farmaceutica, [Validators.required]);
    presentacion = new FormControl(this.data.presentacion, [Validators.required]);
    dosificacion = new FormControl(this.data.dosificacion, [Validators.required]);
    
    modificaArticulo: FormGroup = new FormGroup({
      id: this.id, 
      grupo: this.grupo,
      subgrupo: this.subgrupo, 
      ctrlLegal: this.ctrlLegal,
      tipo: this.tipo,
      gzen: this.gzen,
      medicamento: this.medicamento,
      farmaceutica: this.farmaceutica,
      presentacion: this.presentacion,
      dosificacion: this.dosificacion
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