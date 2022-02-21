import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICargaArchivo, IDetalleCargaArchivo } from 'src/app/models/log.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class LogService {
    private urlCarga: string = environment.API_URL + environment.ENDPOINT_CARGA_ARCHIVO;
    private urlDetalleCarga: string = environment.API_URL + environment.ENDPOINT_DETALLE_CARGA_ARCHIVO;

    constructor(private httpClient: HttpClient) { }

    obtenerCargaArchivoByPeriodoId(periodoId: string): Observable<ICargaArchivo[]> {
        const headers = new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'Ocp-Apim-Subscription-Key': environment.Ocp_Apim_Subscription_Key,
          'Ocp-Apim-Trace': 'true'
        })
        return this.httpClient.get<ICargaArchivo[]>(`${this.urlCarga}${periodoId}`, { headers });
    }

    obtenerDetalleCargaArchivo(cargaArchivoId: string): Observable<IDetalleCargaArchivo[]> {
        const headers = new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Ocp-Apim-Subscription-Key': environment.Ocp_Apim_Subscription_Key,
            'Ocp-Apim-Trace': 'true'
          })
          return this.httpClient.get<IDetalleCargaArchivo[]>(`${this.urlDetalleCarga}${cargaArchivoId}`, { headers });
    }
}