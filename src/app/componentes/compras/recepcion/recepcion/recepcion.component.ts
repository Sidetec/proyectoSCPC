import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { IArticulo } from 'src/app/interface/suc';
import { ComprasSucService } from 'src/app/servicios/compras-suc.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-recepcion',
  templateUrl: './recepcion.component.html',
  styleUrls: ['./recepcion.component.css']
})
export class RecepcionComponent implements OnInit {

 
  datosArticulo: IArticulo[] | undefined;
  constructor(private comprasSucService:ComprasSucService
              ) {
  }
  servicio = new FormControl('', [Validators.required]);
  tipoSolicitud= new FormControl('', [Validators.required]);
  codigoArticulo= new FormControl('', [Validators.required]);
  descripcionArticulo= new FormControl('', [Validators.required]);
  saldoDisponible= new FormControl('', [Validators.required]);
  cantidadRecivir= new FormControl('', [Validators.required]);
  nuevoSaldoDisponible= new FormControl('', [Validators.required]);;

  public ingresoRecepcion: FormGroup = new FormGroup({
    servicio: this.servicio,
    tipoSolicitud: this.tipoSolicitud,
    codigoArticulo: this.codigoArticulo,
    descripcionArticulo: this.descripcionArticulo,
    saldoDisponible: this.saldoDisponible,
    cantidadRecivir: this.cantidadRecivir,
    nuevoSaldoDisponible: this.nuevoSaldoDisponible,
  });

  getErrorMessage(campo: string) {

    if (campo === 'servicio'){
        return this.servicio.hasError('required') ? 'Debes ingresar Servicio' : '';
    }
    if (campo === 'tipoSolicitud'){
        return this.tipoSolicitud.hasError('required') ? 'Debes ingresar Tipo Solicitudo' : '';
    }
    if (campo === 'codigoArticulo'){
        return this.codigoArticulo.hasError('required') ? 'Debes ingresar Código Artículo' : '';
    }
    if (campo === 'descripcionArticulo'){
        return this.descripcionArticulo.hasError('required') ? 'Debes ingresar Descripción Artículo' : '';
    }
    if (campo === 'saldoDisponible'){
        return this.saldoDisponible.hasError('required') ? 'Debes ingresar Saldo Disponible' : '';
    }
    if (campo === 'cantidadRecivir'){
        return this.cantidadRecivir.hasError('required') ? 'Debes ingresar Cantidad Recivir' : '';
    }
    if (campo === 'nuevoSaldoDisponible'){
      return this.nuevoSaldoDisponible.hasError('required') ? 'Debes ingresar Nuevo Saldo Disponible' : '';
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
  onBlurArticulo(event: any){
    let codArticulo= event.target.value;
    this.comprasSucService
    .getBuscaArticulo(codArticulo)
    .subscribe((res: {}) => {
      console.log('articulo: ', res);
      if (res==''){
        
        Swal.fire(
          'ERROR ARTICULO',
          'Artículo no Existe',
         'info'
       );

      }
      else{
        this.datosArticulo = res as IArticulo[];
        /*
        this.codigoArticuloP= this.datosArticulo[0].cod_art;
        this.descripcion=this.datosArticulo[0].descripcion;
        this.uidadMedida=this.datosArticulo[0].unidad;
        this.id=this.datosArticulo[0].id;
        */
        this.ingresoRecepcion.get('descripcionArticulo')!.setValue(this.datosArticulo[0].descripcion);
      }
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


  cerrar() {

  }
}
