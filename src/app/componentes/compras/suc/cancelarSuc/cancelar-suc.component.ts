import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ICancelarSuc } from 'src/app/interface/suc';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-alertas',
  templateUrl: './cancelar-suc.component.html',
  styleUrls: ['./cancelar-suc.component.css']
})
export class CancelarSucComponent implements OnInit {



  datoAlertas: ICancelarSuc | undefined;

  constructor(private dialogRef: MatDialogRef<CancelarSucComponent>,
              ) {
              }

  Responsable = new FormControl('', [Validators.required]);
  Motivo= new FormControl('', [Validators.required]);
  AdjDocu= new FormControl('', [Validators.required]);

  public configuraAlerta: FormGroup = new FormGroup({
    Responsable: this.Responsable,
    Motivo: this.Motivo,
    AdjDocu: this.AdjDocu,
  });

  getErrorMessage(campo: string) {

    if (campo === 'Responsable'){
        return this.Responsable.hasError('required') ? 'Ingresa Nombre del Responsable' : '';
    }
    if (campo === 'Motivo'){
        return this.Motivo.hasError('required') ? 'Ingresa el Motivo de Cierre' : '';
    }
    if (campo === 'AdjDocu'){
        return this.AdjDocu.hasError('required') ? 'Adjunta Documentos' : '';
    }

    return '';
  }

  ngOnInit() {
  }

  enviar() {

            Swal.fire(
            'Se grabó con Éxito',
            'Click en Botón!',
            'success'
          ); // ,
            this.dialogRef.close(1);


  }

  // Error handling



  cerrar() {
    this.dialogRef.close();
  }
}

