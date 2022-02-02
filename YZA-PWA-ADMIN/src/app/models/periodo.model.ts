export interface IPeriodListVm {
    id: string;
    tituloPrimerPeriodo: string;
    primerPeriodoFechaInicio: string;
    primerPeriodoFechaFin: string;
    tituloSegundoPeriodo: string;
    segundoPeriodoFechaInicio: string;
    segundoPeriodoFechaFin: string;
    creado: string;
}

export interface ICreatePeriodCommand {
    tituloPrimerPeriodo: string;
    primerPeriodoFechaInicio: string;
    primerPeriodoFechaFin: string, 
    tituloSegundoPeriodo: string, 
    segundoPeriodoFechaInicio: string, 
    segundoPeriodoFechaFin: string
}

export interface IUpdatePeriodCommand {
    id: string;
    tituloPrimerPeriodo: string;
    primerPeriodoFechaInicio: string;
    primerPeriodoFechaFin: string, 
    tituloSegundoPeriodo: string, 
    segundoPeriodoFechaInicio: string, 
    segundoPeriodoFechaFin: string
}