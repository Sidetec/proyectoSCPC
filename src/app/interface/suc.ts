export interface IConsultaSuc {
    codigoArticulo: string;
    detalle: string;
    unidadDeMedida: string;
    cantidadTotal: number;
    valorUnitario: number;
    montoTotal: number;
    idLicitacion: number;
    idOc: number;
    totalComprado: number
    saldoSuc: number;
    }

    export interface IArticuloSuc1 {
      fechaSolicitud: string;
      servicio:string;
      responsable: string;
      motivosCompra: string;
    }
    export interface IArticuloSuc {
      codigoArticulo: string;
      detalle: string;
      unidadDeMedida: string;
      cantidadTotal: string;
      valorUnitario: string;
      montoTotal: string;
      }
    export interface IDetalleSuc1 {
      idSuc:string;
      estado:string;
      fechaSolicitud: string;
      servicio:string;
      responsable: string;
      motivoCompra: string;
    }

    export interface IConsultaSucLista {
      id: string;
      suc: string;
      servicio: string;
      responsable: string;
      fechaSolicitud: string;
      estado: string;
      motivo: string;
      MontoTotal:string;
    }

    export interface ICancelarSuc {
        Responsable:string;
        Motivo:string;
        AdjDocu:string;
      }
