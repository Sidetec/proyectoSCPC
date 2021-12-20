import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IIngresoRecepcion } from 'src/app/interface/Pac';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-recepcion',
  templateUrl: './recepcion.component.html',
  styleUrls: ['./recepcion.component.css']
})
export class RecepcionComponent implements OnInit {

  datoAlertas: IIngresoRecepcion | undefined;

  constructor(
              ) {
  }

  servicio = new FormControl('', [Validators.required]);
  tipoSolicitud= new FormControl('', [Validators.required]);
  codigoArt= new FormControl('', [Validators.required]);
  descripcionArt= new FormControl('', [Validators.required]);
  saldoDisponible= new FormControl('', [Validators.required]);
  cantidad= new FormControl('', [Validators.required]);
  nuevoSaldo= new FormControl('', [Validators.required]);;

  public ingresoConsumo: FormGroup = new FormGroup({
    servicio: this.servicio,
    tipoSolicitud: this.tipoSolicitud,
    codigoArt: this.codigoArt,
    descripcionArt: this.descripcionArt,
    saldoDisponible: this.saldoDisponible,
    cantidad: this.cantidad,
    nuevoSaldo: this.nuevoSaldo,
  });
  getErrorMessage(campo: string) {

    if (campo === 'servicio'){
        return this.servicio.hasError('required') ? 'Debes Ingresar Servicio' : '';
    }
    if (campo === 'tipoSolicitud'){
        return this.tipoSolicitud.hasError('required') ? 'Debes Ingresar Tipo de Solicitud' : '';
    }
    if (campo === 'codigoArt'){
        return this.codigoArt.hasError('required') ? 'Debes Ingresar Código Artículo' : '';
    }
    if (campo === 'descripcionArt'){
        return this.descripcionArt.hasError('required') ? 'Debes Ingresar Descripción Artículo' : '';
    }
    if (campo === 'saldoDisponible'){
        return this.saldoDisponible.hasError('required') ? 'Debes Ingresar Saldo Disponible' : '';
    }
    if (campo === 'cantidad'){
        return this.cantidad.hasError('required') ? 'Debes Ingresar Cantidad Recibir' : '';
    }
    if (campo === 'nuevoSaldo'){
      return this.nuevoSaldo.hasError('required') ? 'Debe Ingresar Nuevo Saldo Disponible' : '';
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
          }

