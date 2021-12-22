import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IAlertas } from 'src/app/interface/Pac';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent implements OnInit {



  datoAlertas: IAlertas | undefined;

  constructor(private dialogRef: MatDialogRef<AlertasComponent>,
              ) {
              }

  fechaInicio = new FormControl('', [Validators.required]);
  fechaTermino= new FormControl('', [Validators.required]);
  primerAvisoDias= new FormControl('', [Validators.required]);
  segundoAvisoDias= new FormControl('', [Validators.required]);
  tercerAvisoDias= new FormControl('', [Validators.required]);
  dFechaExtincion= new FormControl('', [Validators.required]);
  stockMinimoPorc= new FormControl('', [Validators.required]);

  public configuraAlerta: FormGroup = new FormGroup({
    fechaInicio: this.fechaInicio,
    fechaTermino: this.fechaTermino,
    primerAvisoDias: this.primerAvisoDias,
    segundoAvisoDias: this.segundoAvisoDias,
    tercerAvisoDias: this.tercerAvisoDias,
    stockMinimoPorc: this.stockMinimoPorc,
  });

  getErrorMessage(campo: string) {

    if (campo === 'fechaInicio'){
        return this.fechaInicio.hasError('required') ? 'Debes ingresar Fecha Inicio' : '';
    }
    if (campo === 'fechaTermino'){
        return this.fechaTermino.hasError('required') ? 'Debes ingresar Fecha Término' : '';
    }
    if (campo === 'primerAvisoDias'){
        return this.primerAvisoDias.hasError('required') ? 'Debes ingresar Primer Aviso' : '';
    }
    if (campo === 'segundoAvisoDias'){
        return this.segundoAvisoDias.hasError('required') ? 'Debes ingresar Segundo Aviso' : '';
    }
    if (campo === 'tercerAvisoDias'){
        return this.tercerAvisoDias.hasError('required') ? 'Debes ingresar Tercer Aviso' : '';
    }
    if (campo === 'stockMinimoPorc'){
        return this.stockMinimoPorc.hasError('required') ? 'Debes ingresar Stock Mínimo' : '';
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

