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
    
    export interface ICancelarSuc {
        Responsable:string;
        Motivo:string;
        AdjDocu:string;
      }
    