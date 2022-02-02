import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    return this.httpClient.get<IPeriodListVm[]>(this.url);
  }

  crearPeriodo(newPeriod: ICreatePeriodCommand) {
    const headers = {'content-type': 'application/json'};
    return this.httpClient.post(this.url, newPeriod , {  headers: headers })
  }

  updatePeriodo(periodModified: IUpdatePeriodCommand) {
    const headers = {'content-type': 'application/json'};
    return this.httpClient.put(this.url, periodModified, {headers: headers});
  }

}
