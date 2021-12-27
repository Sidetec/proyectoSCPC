import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IIgresoConsumo } from 'src/app/interface/Pac';
import Swal from 'sweetalert2';


export interface PeriodicElement {
  numeroreporte: number;
  fechareporte: Date;
  tiporeporte: string;
  tipoproblema: string;
  resuelto:string;
  complejidad:string;
  criticidad:string;
  rut:string;
  nombre:string;
  servicio:string;
  cargo:string;
  nivel:string;
  responsable:string;
  tiemporesolucion:string;
  tiemporestante:string;


}

export interface BitacoraElement {

  fecha: Date;
  actividad: string;

}

interface servicio {
  value: string;
  viewValue: string;
}

interface cargo {
  value: string;
  viewValue: string;
}

interface tipoproblema {
  value: string;
  viewValue: string;
}

interface complejidad {
  value: string;
  viewValue: string;
}


interface criticidad {
  value: string;
  viewValue: string;
}



const ELEMENT_DATA: PeriodicElement[] = [
  {numeroreporte: 10001, fechareporte: new Date('2021/12/20'), tiporeporte: 'Incidencia', tipoproblema: 'Problema', resuelto: 'S',complejidad: 'Alta',criticidad: 'Alta',rut:'500-k',nombre:'Rodrigo',servicio:'Farmacia',cargo:'Dispensador' , nivel:'1',responsable:'Soporte 1',tiemporesolucion:'4 horas',tiemporestante:'0 horas'},
  {numeroreporte: 10002, fechareporte: new Date('2021/12/20'), tiporeporte: 'Requerimiento', tipoproblema: 'Instalación', resuelto: 'N',complejidad: 'Baja',criticidad: 'Media',rut:'100-0',nombre:'Jessica',servicio:'Cirugia',cargo:'Jefe Area', nivel:'3',responsable:'Soporte 3',tiemporesolucion:'48 horas',tiemporestante:'24 horas'},
  {numeroreporte: 99999, fechareporte: new Date('2021/12/20'), tiporeporte: 'Incidencia', tipoproblema: 'Problema', resuelto: 'N',complejidad: 'Media',criticidad: 'Media',rut:'200-1',nombre:'Gonzalo',servicio:'Enfermería',cargo:'Jefe Enfermera', nivel:'1',responsable:'Soporte 1',tiemporesolucion:'24 horas',tiemporestante:'10 horas'}
];

const ELEMENT_DATA2: BitacoraElement[] = [
  {fecha: new Date('2021/12/20') , actividad: "actividad 1"},
  {fecha: new Date('2021/12/20') , actividad: "actividad 2"},
  {fecha: new Date('2021/12/20') , actividad: "actividad 3"}
];

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})


export class ReportesComponent implements OnInit {


  displayedColumns: string[] = ['numeroreporte', 'fechareporte', 'tiporeporte', 'tipoproblema','resuelto','complejidad','criticidad','rut','nombre','servicio','cargo','nivel','responsable','tiemporesolucion','tiemporestante'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();

  displayedColumns2: string[] = ['fecha', 'actividad'];
  dataSource2 = ELEMENT_DATA2;

  servicios: servicio[] = [
    {value: '-1', viewValue: 'Seleccione'},
    {value: '1', viewValue: 'Farmacia'},
    {value: '2', viewValue: 'Servicio2'},
    {value: '3', viewValue: 'Servicio3'}
  ];


  cargos: cargo[] = [
    {value: '-1', viewValue: 'Seleccione'},
    {value: '1', viewValue: 'Farmacéutico'},
    {value: '2', viewValue: 'Cargo2'},
    {value: '3', viewValue: 'Cargo3'}
  ];

  tipoproblemas: tipoproblema[] = [
    {value: '-1', viewValue: 'Seleccione'},
    {value: '1', viewValue: 'Requerimiento'},
    {value: '2', viewValue: 'tipo problema 2'}
  ]


  criticidades: criticidad[] = [

    {value: '-1', viewValue: 'Seleccione'},
    {value: '1', viewValue: 'Baja'},
    {value: '2', viewValue: 'Media'},
    {value: '3', viewValue: 'Alta'}

  ];

  complejidades: complejidad[] = [
    {value: '-1', viewValue: 'Seleccione'},
    {value: '1', viewValue: 'Baja'},
    {value: '2', viewValue: 'Media'},
    {value: '3', viewValue: 'Alta'}

  ];

  constructor() {


  }

  btnSalir:boolean = false;
  btnNuevo:boolean = false;
  btnImprimir:boolean = false;
  popupedicionreporte:boolean = false;
  panelOpenState:boolean = false;
  numeroreporte: string = '';
  btnSalir2:boolean = false;
  btnActualizar:boolean = false;
  btnCerrarReporte:boolean = false;
  btnAgregar:boolean = false;
  textopopupedicionreporte:string = "";
  btnGrabar:boolean = true;


  ngOnInit() {
  }


  getRecord(numeroreporte:any)
  {
  console.log(numeroreporte);

  this.textopopupedicionreporte = 'Detalle Reporte N°';

  this.numeroreporte = numeroreporte;

  this.popupedicionreporte = true;
  this.btnGrabar = true;
  this.btnCerrarReporte = false;
  this.btnActualizar = false;




  }

Salir(){





}

Salir2(){



  Swal.fire({
    title: 'Está seguro que desea salir?',
    showDenyButton: false,
    showCancelButton: true,
    confirmButtonText: 'SI',
    denyButtonText: 'NO',
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      this.popupedicionreporte = false;
      //Swal.fire('Se ha cerrado el Reporte!', '', 'success')

    } else if (result.isDenied) {
      //Swal.fire('Changes are not saved', '', 'info')
    }
  })


}

Nuevo(){

  this.numeroreporte = '';
  this.textopopupedicionreporte = 'Creando Nuevo Reporte';
  this.popupedicionreporte=true;
  this.btnGrabar = false;
  this.btnActualizar= true;
  this.btnCerrarReporte= true;

}

Imprimir(){


}
Actualizar()
{
  this.popupedicionreporte = false;
  Swal.fire(
    'Se ha actualizado este Reporte',
    '',
    'success'
  );


}
CerrarReporte()
{

  Swal.fire({
    title: 'Está seguro que desea cerrar el Reporte?',
    showDenyButton: false,
    showCancelButton: true,
    confirmButtonText: 'SI',
    denyButtonText: 'No',
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      this.popupedicionreporte = false;
      Swal.fire('Se ha cerrado el Reporte!', '', 'success')

    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  })


}

Agregar()
{

}

Grabar(){

  this.popupedicionreporte = false;
  Swal.fire({
    title: 'Se ha generado el Requerimiento N° <strong>89898</strong>',
    html: '<ul><li>Se ha derivado su Requerimiento al comité de Atención de Requerimientos para su análisis y evaluación.</li><li>Se pondrán en contacto con el usuario en <strong>72 horas</strong>.</li></ul>',
    icon: 'success'
  });



  //this.dataSource.push({numeroreporte: 89898, fechareporte: new Date('2021/12/23'), tiporeporte: 'Requerimiento', tipoproblema: 'Instalación', resuelto: 'N',complejidad: 'Media',criticidad: 'Alta'});
  ELEMENT_DATA.push(
    {numeroreporte: 89898, fechareporte: new Date('2021/12/23'), tiporeporte: 'Requerimiento', tipoproblema: 'Instalación', resuelto: 'N',complejidad: 'Media',criticidad: 'Alta',rut:'900-2',nombre:'Pedro',servicio:'Farmacia',cargo:'Dispensador', nivel:'1',responsable:'Soporte 1',tiemporesolucion:'72 horas',tiemporestante:'48 horas'}
  )

  //console.log(ELEMENT_DATA);

  this.dataSource = ELEMENT_DATA;

  this.dataSource = [...this.dataSource];
}

  enviar() {

            Swal.fire(
            'Se grabó con Éxito',
            'Click en Botón!',
            'success'
          ); // ,

  }


  cerrar() {

  }


}
