export interface IArticulo{
    articulo: string;
    cantidad: number;
    descripcion: string;
    ctrlLegal: string;
    grupo: string;
    subgrupo: string; 
    tipo: string;
    gzen: string;
    medicamento: string;
    farmaceutica: string;
    presentacion: string;
    dosificacion: string;
    restricciones: string;
    altTerapeutica: string;
    observaciones: string;
}

export interface IArtFarm{
    cantidad: number;
    descripcion: string;
    ctrlLegal: string;
    grupo: string;
    subgrupo: string; 
    tipo: string;
    gzen: string;
    medicamento: string;
    farmaceutica: string;
    presentacion: string;
    dosificacion: string;
    restricciones: string;
    altTerapeutica: string;
    observaciones: string;
}

export interface IClimatizacion {
    articulo: string;
    tempIdeal: string;
    tempActual: string;
}

export interface IResultado{
    resultado: number;
}