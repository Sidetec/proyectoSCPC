export interface IArticulo{
    id: string;
    grupo: string;
    subgrupo: string; 
    ctrlLegal: string;
    tipo: string;
    gzen: string;
    medicamento: string;
    farmaceutica: string;
    presentacion: string;
    dosificacion: string;
    /*restricciones: string;
    altTerapeutica: string;
    observaciones: string; */
}

export interface IClimatizacion {
    articulo: string;
    tempIdeal: string;
    tempActual: string;
}