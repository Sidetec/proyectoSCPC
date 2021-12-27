export interface IArticulo{
    articulo: string;
    cantidad: number;
    descripcion: string;
    controlLegal: string;    
    grupo: string;
    subGrupo: string;    
    tipo: string;
    codigoGzen: string;
    medicamento: string;
    fFarmacia: string;
    presentacion: string;
    dosificacion: string;
    restricciones: string;
    alternativa: string;
    observaciones: string;
}

export interface IArtFarm {
 //   cantidad: number;
 //   descripcion: string;
    controlLegal: string;    
    grupo: string;
    subGrupo: string;    
    tipo: string;
    codigoGzen: string;
    medicamento: string;
    fFarmacia: string;
    presentacion: string;
    dosificacion: string;
    restricciones: string;
    alternativa: string;
    observaciones: string;
}
export interface IResultado{
    codigo: string;
}