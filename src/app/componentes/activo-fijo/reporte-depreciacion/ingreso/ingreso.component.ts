import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IAlertas } from 'src/app/interface/Pac';


import Swal from 'sweetalert2';
@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<IngresoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
              ) {

              }

              fechaCompra = new FormControl('2021/02/01', [Validators.required]);
              valorCompra= new FormControl('499000', [Validators.required]);
              vidaUtil= new FormControl('5', [Validators.required]);
              valorDesecho= new FormControl('49900', [Validators.required]);
              depreciacionAnual= new FormControl('89820', [Validators.required]);


              public agregaReferencia: FormGroup = new FormGroup({
                fechaCompra: this.fechaCompra,
                valorCompra: this.valorCompra,
                vidaUtil: this.vidaUtil,
                valorDesecho: this.valorDesecho,
                depreciacionAnual: this.depreciacionAnual
             //   motivoCompra: this.motivoCompra
              });


  getErrorMessage(campo: string) {

    if (campo === 'fechaCompra'){
      return this.fechaCompra.hasError('required') ? 'Debes ingresar Fecha Solicitud' : '';
  }
  if (campo === 'valorCompra'){
      return this.valorCompra.hasError('required') ? 'Debes ingresar Valor Compra' : '';
  }
  if (campo === 'vidaUtil'){
      return this.vidaUtil.hasError('required') ? 'Debes ingresar Vida Util' : '';
  }
  if (campo === 'valorDesecho'){
    return this.valorDesecho.hasError('required') ? 'Debes ingresar Desecho' : '';
  }

  if (campo === 'depreciacionAnual'){
    return this.depreciacionAnual.hasError('required') ? 'Debes ingresar Depreciación Anual' : '';
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



