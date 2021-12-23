import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IAlertas } from 'src/app/interface/Pac';


import Swal from 'sweetalert2';


@Component({
  selector: 'app-agrega-suc',
  templateUrl: './agrega-suc.component.html',
  styleUrls: ['./agrega-suc.component.css']
})
export class AgregasucComponent implements OnInit {





  constructor(private dialogRef: MatDialogRef<AgregasucComponent>,
              ) {
              }

              fechaSolicitud = new FormControl('', [Validators.required]);
              servicio= new FormControl('', [Validators.required]);
              responsable= new FormControl('', [Validators.required]);
              motivoCompra= new FormControl('', [Validators.required]);


              public agregaArticulo: FormGroup = new FormGroup({
                fechaSolicitud: this.fechaSolicitud,
                servicio: this.servicio,
                responsable: this.responsable,
                motivoCompra: this.motivoCompra
              });


  getErrorMessage(campo: string) {

    if (campo === 'fechaSolicitud'){
      return this.fechaSolicitud.hasError('required') ? 'Debes ingresar Fecha Solicitud' : '';
  }
  if (campo === 'servicio'){
      return this.servicio.hasError('required') ? 'Debes ingresar Servicio' : '';
  }
  if (campo === 'responsable'){
      return this.responsable.hasError('required') ? 'Debes ingresar Responsable' : '';
  }
  if (campo === 'motivoCompra'){
      return this.motivoCompra.hasError('required') ? 'Debes ingresar Motivo de Compra' : '';
  }

    return '';
  }

  ngOnInit() {

  }


  // Error handling



  cerrar() {
    this.dialogRef.close();
  }
}



