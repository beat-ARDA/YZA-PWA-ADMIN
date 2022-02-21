import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICreatePeriodCommand, IPeriodListVm, IUpdatePeriodCommand } from 'src/app/models/periodo.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class APService {

  private url: string = environment.API_URL + environment.ENDPOINT_PERIODO;

  constructor(private httpClient: HttpClient) { }

  obtenerPeriodos(): Observable<IPeriodListVm[]> {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Ocp-Apim-Subscription-Key': environment.Ocp_Apim_Subscription_Key,
      'Ocp-Apim-Trace': 'true'
    })
    return this.httpClient.get<IPeriodListVm[]>(this.url, { headers });
  }

  crearPeriodo(newPeriod: ICreatePeriodCommand) {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Ocp-Apim-Subscription-Key': environment.Ocp_Apim_Subscription_Key,
      'Ocp-Apim-Trace': 'true',
      'content-type': 'application/json'
    })
    return this.httpClient.post(this.url, newPeriod, { headers })
  }

  updatePeriodo(periodModified: IUpdatePeriodCommand) {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Ocp-Apim-Subscription-Key': environment.Ocp_Apim_Subscription_Key,
      'Ocp-Apim-Trace': 'true',
      'content-type': 'application/json'
    })
    return this.httpClient.put(this.url, periodModified, { headers });
  }

  eliminarPeriodo(periodoId: string) {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Ocp-Apim-Subscription-Key': environment.Ocp_Apim_Subscription_Key,
      'Ocp-Apim-Trace': 'true',
      'content-type': 'application/json'
    })

    return this.httpClient.delete(`${this.url}/${periodoId}`, {headers});
  }

}
