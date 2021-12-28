import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IArticuloF } from 'src/app/interface/arsenal';
import { IIgresoConsumo } from 'src/app/interface/Pac';
import { IServicioListaP } from 'src/app/interface/recepcion';
import { ListaArsenalService } from 'src/app/servicios/farmacia.service';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-agrega-consumo',
  templateUrl: './agrega-consumo.component.html',
  styleUrls: ['./agrega-consumo.component.css']
})
export class AgregaConsumoComponent implements OnInit {

  listaServicio=[
    {codigo:"1", nombre:"CR Medicina"},
    {codigo:"2", nombre:"CR Quirúrgico Cirugía"},
    {codigo:"3", nombre:"CR Quirúrgico Traumatología"},
    {codigo:"4", nombre:"CR Quemados Pabellón"},
    {codigo:"5", nombre:"CR Quemados Hospitalización"},
    {codigo:"6", nombre:"CR Urgencia Médica Quirúrgica"},
    {codigo:"7", nombre:"CR Urgencia Médica Admisión"},
    {codigo:"8", nombre:"CR Urgencia Médica  Odontología Maxilofacial"},
    {codigo:"9", nombre:"CR Paciente Crítico"}
    ] as IServicioListaP[]

  datoAlertas: IIgresoConsumo | undefined;

  constructor(private listaArsenalService: ListaArsenalService
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

  onBlurArticulo(event: any){
    let codArticulo= event.target.value;
    this.listaArsenalService
    .getArticulo(codArticulo)
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
        let datosArticulo = res as IArticuloF[];
        if (datosArticulo[0].disponible!=null){
          this.ingresoConsumo.get('saldoDisponibleantesConsumo')!.setValue(datosArticulo[0].disponible);
        }else{
          this.ingresoConsumo.get('saldoDisponibleantesConsumo')!.setValue('0');
        }

        this.ingresoConsumo.get('descripcionArticulo')!.setValue(datosArticulo[0].descripcion);

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
    let saldo= this.ingresoConsumo.get('saldoDisponibleantesConsumo')?.value;
    console.log('Saldo: ',saldo);
    this.ingresoConsumo.get('saldoDisponibleDespuesConsumo')!.
      setValue(parseInt(saldo) - parseInt(this.ingresoConsumo.get('cantidadConsumir')?.value));
  }


}
