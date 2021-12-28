import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ICancelarSuc } from 'src/app/interface/suc';
import { ComprasSucService } from 'src/app/servicios/compras-suc.service';

import * as moment from 'moment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alertas',
  templateUrl: './cancelar-suc.component.html',
  styleUrls: ['./cancelar-suc.component.css']
})
export class CancelarSucComponent implements OnInit {

  idSuc=''
  parametro={numSuc:'',id:''}

  datoAlertas: ICancelarSuc | undefined;

  constructor(private dialogRef: MatDialogRef<CancelarSucComponent>
    ,private comprasSucService: ComprasSucService
    ,@Inject(MAT_DIALOG_DATA) public data: any) {
      this.parametro = data;
      console.log('idsuc',this.idSuc);

  }

  Responsable = new FormControl('', [Validators.required]);
  Motivo= new FormControl('', [Validators.required]);

   cancelarSuc: FormGroup = new FormGroup({
    Responsable: this.Responsable,
    Motivo: this.Motivo,
  });

  getErrorMessage(campo: string) {

    if (campo === 'Responsable'){
        return this.Responsable.hasError('required') ? 'Ingresa Nombre del Responsable' : '';
    }
    if (campo === 'Motivo'){
        return this.Motivo.hasError('required') ? 'Ingresa el Motivo de Cierre' : '';
    }


    return '';
  }

  ngOnInit() {
  }

  enviar() {
    let date: Date = new Date();
    let formattedDate = (moment(date)).format('YYYY-MM-DD')
    console.log('fecha formato',formattedDate)
    this.comprasSucService
    .putDataSucCancelar(this.parametro.id,this.parametro.numSuc,this.cancelarSuc.get('Responsable')?.value,this.cancelarSuc.get('Motivo')?.value,'',formattedDate)
    .subscribe((res: {}) => {
      console.log('suc: ', res);
      Swal.fire(
        'Se canceló con Éxito',
        'Click en Botón!',
        'success'
      ); // ,

      console.log('paso')
        this.dialogRef.close(1);

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
  );


  }

  // Error handling



  cerrar() {
    this.dialogRef.close();
  }
}

