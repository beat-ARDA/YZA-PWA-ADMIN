import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DownloadFileService {

  private url: string = environment.API_URL + environment.ENDPOINT_EXCEL_FORMAT

  constructor(private httpClient: HttpClient) { }

  getXlsFormat(): any {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Ocp-Apim-Subscription-Key': environment.Ocp_Apim_Subscription_Key,
      'Ocp-Apim-Trace': 'true'
    })
    // the service returns a blob
    return this.httpClient.get(this.url, { headers, responseType: 'blob' as 'json' });
  }
}
