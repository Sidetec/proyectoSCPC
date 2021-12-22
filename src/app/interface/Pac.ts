export interface IListaPac {
  id: string;
  pac: string;
  servicio: string;
  responsable: string;
  campo1: string;
  campo2: string;
  campo3: string;
  campo4:string;
  campo5:string;
}
export interface IDetallePac1 {
  idPac:string;
  pacAnio:string;
  servicio: string;
}
export interface IConsultaPac {
  codigo: string;
  detalle: string;
  unidadDeMedida: string;
  enero: number;
  febrero: number;
  marzo: number;
  abril: number;
  mayo: number;
  junio: number;
  julio: number;
  agosto: number;
  septiembre: number;
  octubre: number;
  noviembre: number;
  diciembre: number;
  canttotal: number;
  valorUnitario: number;
  montoTotal: number;
  idLic: number;
  idOc: number;
  totalComprado: number
  saldoLicitacion: number;
  }

  export interface IAlertas {
    fechaInicio:Date;
    fechaTermino:Date;
    primerAvisoDias:number;
    segundoAvisoDias:number;
    tercerAvisoDias:number;
    stockMinimoPorc:number;
  }

  export interface IIgresoConsumo {
  planAnual:number;
  servicio:number;
  codigoArticulo: number;
  descripcionArticulo: string;
  saldoDisponibleantesConsumo: number;
  cantidadConsumir: number;
  saldoDisponibleDespuesConsumo: number;
  }

  export interface IIngresoRecepcion {
    servicio:string;
    tipoSolicitud:string;
    codigoArt:string;
    descripcionArt:string;
    saldoDisponible:string;
    cantidad:string;
    nuevoSaldo:string;
  }
