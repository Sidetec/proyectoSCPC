import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IAlertas } from 'src/app/interface/Pac';


import Swal from 'sweetalert2';


@Component({
  selector: 'app-agrega-oc',
  templateUrl: './agrega-oc.component.html',
  styleUrls: ['./agrega-oc.component.css']
})
export class AgregaOcComponent implements OnInit {


  constructor(private dialogRef: MatDialogRef<AgregaOcComponent>,
              ) {
              }
              numOrdenCompra= new FormControl('', [Validators.required]);
              tipoDocumentoAsociado= new FormControl('', [Validators.required]);
              numDocumentoAsociado= new FormControl('', [Validators.required]);
              fechaSolicitud = new FormControl('', [Validators.required]);
              empresa= new FormControl('', [Validators.required]);
              rut= new FormControl('', [Validators.required]);
              descripcion= new FormControl('', [Validators.required]);
              direccionEnvioFactura= new FormControl('', [Validators.required]);
              direccionDespacho= new FormControl('', [Validators.required]);
              formaPago= new FormControl('', [Validators.required]);

              public agregaArticulo: FormGroup = new FormGroup({
                numOrdenCompra: this.numOrdenCompra,
                tipoDocumentoAsociado: this.tipoDocumentoAsociado,
                numDocumentoAsociado: this.numDocumentoAsociado,
                fechaSolicitud: this.fechaSolicitud,
                empresa: this.empresa,
                rut: this.rut,
                descripcion: this.descripcion,
                direccionEnvioFactura: this.direccionEnvioFactura,
                direccionDespacho: this.direccionDespacho,
                formaPago: this.formaPago
              });


  getErrorMessage(campo: string) {

    if (campo === 'numOrdenCompra'){
      return this.numOrdenCompra.hasError('required') ? 'Debes ingresar Número Orden de Compra' : '';
    }

    if (campo === 'tipoDocumentoAsociado'){
      return this.tipoDocumentoAsociado.hasError('required') ? 'Debes ingresar Tipo Documento Asociado' : '';
    }
    if (campo === 'numDocumentoAsociado'){
      return this.numDocumentoAsociado.hasError('required') ? 'Debes ingresar número Documento Asociado' : '';
    }
    if (campo === 'fechaSolicitud'){
      return this.fechaSolicitud.hasError('required') ? 'Debes ingresar Fecha Solicitud' : '';
    }
    if (campo === 'empresa'){
        return this.empresa.hasError('required') ? 'Debes ingresar Empresa' : '';
    }
    if (campo === 'rut'){
        return this.rut.hasError('required') ? 'Debes ingresar Rut' : '';
    }
    if (campo === 'descripcion'){
        return this.descripcion.hasError('required') ? 'Debes ingresar Descripción' : '';
    }
    if (campo === 'direccionEnvioFactura'){
      return this.direccionEnvioFactura.hasError('required') ? 'Debes ingresar Dirección Envío Factura' : '';
    }
    if (campo === 'direccionDespacho'){
      return this.direccionDespacho.hasError('required') ? 'Debes ingresar Dirección Despacho' : '';
    }
    if (campo === 'formaPago'){
      return this.formaPago.hasError('required') ? 'Debes ingresar Forma Pago' : '';
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



