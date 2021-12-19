import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IIgresoConsumo } from 'src/app/interface/Pac';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-agrega-consumo',
  templateUrl: './agrega-consumo.component.html',
  styleUrls: ['./agrega-consumo.component.css']
})
export class AgregaConsumoComponent implements OnInit {


  datoAlertas: IIgresoConsumo | undefined;

  constructor(
              ) {
  }

  planAnual = new FormControl('', [Validators.required]);
  servicio= new FormControl('', [Validators.required]);
  codigoArticulo= new FormControl('', [Validators.required]);
  descripcionArticulo= new FormControl('', [Validators.required]);
  saldoDisponibleantesConsumo= new FormControl('', [Validators.required]);
  cantidadConsumir= new FormControl('', [Validators.required]);
  saldoDisponibleDespuesConsumo= new FormControl('', [Validators.required]);;

  public ingresoConsumo: FormGroup = new FormGroup({
    planAnual: this.planAnual,
    servicio: this.servicio,
    codigoArticulo: this.codigoArticulo,
    descripcionArticulo: this.descripcionArticulo,
    saldoDisponibleantesConsumo: this.saldoDisponibleantesConsumo,
    cantidadConsumir: this.cantidadConsumir,
    saldoDisponibleDespuesConsumo: this.saldoDisponibleDespuesConsumo,
  });

  getErrorMessage(campo: string) {

    if (campo === 'planAnual'){
        return this.planAnual.hasError('required') ? 'Debes ingresar Plan Anual' : '';
    }
    if (campo === 'servicio'){
        return this.servicio.hasError('required') ? 'Debes ingresar Servicio' : '';
    }
    if (campo === 'codigoArticulo'){
        return this.codigoArticulo.hasError('required') ? 'Debes ingresar Código Artículo' : '';
    }
    if (campo === 'descripcionArticulo'){
        return this.descripcionArticulo.hasError('required') ? 'Debes ingresar Descripción Artículo' : '';
    }
    if (campo === 'saldoDisponibleantesConsumo'){
        return this.saldoDisponibleantesConsumo.hasError('required') ? 'Debes ingresar saldo disponible antes de Consumo' : '';
    }
    if (campo === 'cantidadConsumir'){
        return this.cantidadConsumir.hasError('required') ? 'Debes ingresar Cantidad a consumir' : '';
    }
    if (campo === 'saldoDisponibleDespuesConsumo'){
      return this.saldoDisponibleDespuesConsumo.hasError('required') ? 'Debes ingresar saldo disponible después de consumo' : '';
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



  }

  // Error handling



  cerrar() {

  }
}
