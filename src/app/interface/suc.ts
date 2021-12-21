export interface IConsultaSuc {
    codigoArticulo: string;
    detalle: string;
    unidadDeMedida: string;
    catidadTotal: number;
    valorUnitario: number;
    montoTotal: number;
    idLicitacion: number;
    idOc: number;
    totalComprado: number
    saldoSuc: number;
    }

    export interface IDetalleSuc1 {
      idSuc:string;
      estado:string;
      fechaSolicitud: string;
      servicio:string;
      responsable: string;
      motivosCompra: string;
    }

    export interface IConsultaSucLista {
      suc: string;
      Estado: string;
      fechaSolicitud: string;
      servicio: string;
      responsable: string;
      Motivo: string;
      MontoTotal:string;
    }

    export interface ICancelarSuc {
        Responsable:string;
        Motivo:string;
        AdjDocu:string;
      }
