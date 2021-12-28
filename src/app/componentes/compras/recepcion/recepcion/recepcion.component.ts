import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { IArticuloOc } from 'src/app/interface/oc';
import { IServicio } from 'src/app/interface/recepcion';
import { ComprasOcService } from 'src/app/servicios/compras-oc.service';
import { ComprasRecepcionService } from 'src/app/servicios/compras-recepcion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recepcion',
  templateUrl: './recepcion.component.html',
  styleUrls: ['./recepcion.component.css']
})
export class RecepcionComponent implements OnInit {

  articulo: IArticuloOc | undefined;
  datosServicios: IServicio[] | undefined;
  listaServicios: string[] | undefined;
  listaSolicitud: string[] = ["PAC","SUC"];

  constructor(public comprasRecepcionService: ComprasRecepcionService,
              public comprasOcService: ComprasOcService
              ) {
  }
  servicio = new FormControl('', [Validators.required]);
  tipoSolicitud= new FormControl('', [Validators.required]);
  codigoArticulo= new FormControl('', [Validators.required]);
  descripcionArticulo= new FormControl('', [Validators.required]);
  saldoDisponible= new FormControl('', [Validators.required]);
  cantidadRecibir= new FormControl('', [Validators.required]);
  nuevoSaldoDisponible= new FormControl('', [Validators.required]);;

  public ingresoRecepcion: FormGroup = new FormGroup({
    servicio: this.servicio,
    tipoSolicitud: this.tipoSolicitud,
    codigoArticulo: this.codigoArticulo,
    descripcionArticulo: this.descripcionArticulo,
    saldoDisponible: this.saldoDisponible,
    cantidadRecibir: this.cantidadRecibir,
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
    if (campo === 'cantidadRecibir'){
        return this.cantidadRecibir.hasError('required') ? 'Debes ingresar Cantidad Recibir' : '';
    }
    if (campo === 'nuevoSaldoDisponible'){
      return this.nuevoSaldoDisponible.hasError('required') ? 'Debes ingresar Nuevo Saldo Disponible' : '';
    }
    return '';
  }

  ngOnInit() {
    this.getListaServicios();
  }

  getListaServicios(): void {
    this.comprasRecepcionService
      .getDataServiciosLista()
      .subscribe((res: {}) => {
        console.log('Artículos: ', res);
        this.datosServicios = res as IServicio[];
      },
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
  enviar() {

            Swal.fire(
            'Se grabó con Éxito',
            'Click en Botón!',
            'success'
          ); // ,

  }

 onBlurArticulo(event: any){
    let codArticulo= event.target.value;
    this.comprasOcService
    .getDataOcDetalle2(codArticulo)
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
        let datosArticulo = res as IArticuloOc[];
        this.ingresoRecepcion.get('descripcionArticulo')!.setValue(datosArticulo[0].detalles);
        this.ingresoRecepcion.get('saldoDisponible')!.setValue(datosArticulo[0].cantidadTotal);
      }
    },
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

  onBlurSaldo(event: any){
    let saldo= this.ingresoRecepcion.get('cantidadRecibir')?.value;
    console.log('Saldo: ',saldo);
    this.ingresoRecepcion.get('nuevoSaldoDisponible')!.
      setValue(parseInt(saldo) + parseInt(this.ingresoRecepcion.get('saldoDisponible')?.value));
  }

  cerrar() {

  }
}
