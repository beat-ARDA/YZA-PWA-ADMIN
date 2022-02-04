import { Injectable } from '@angular/core';
import { BlobServiceClient } from "@azure/storage-blob";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ABSService {

  public blobSasUrl = environment.BLOB_SAS_URL
  public blobServiceClient = new BlobServiceClient(this.blobSasUrl);
  public containerName = environment.BLOB_CONTAINER_NAME;
  public containerClient = this.blobServiceClient.getContainerClient(this.containerName);

  constructor() {
  }
  uploadFiles = async (inputFile: any, guid: string) => {
    try {
      const [, fileExt] = inputFile.files[0].name.split(".")
      const now = Date.now()
      const fileReNamed = `reporte_${now}.${fileExt}`
      const blockBlobClient = this.containerClient.getBlockBlobClient(fileReNamed);
      blockBlobClient.url
      try {
        await blockBlobClient.uploadData(inputFile.files[0]).then(res => {
          blockBlobClient.setMetadata({ PeriodoId: guid }).then(res => {
            // for (let p of this.ps.ObtenerPeriodos()) {
            //   if (p.identificador == guid) {
            //     p.urlDescarga = blockBlobClient.url;
            //     p.nombreArchivo = inputFile.files[0].name;
            //   }
            // }
          })
        });
        alert("Archivo cargado con exito")
      } catch (error) {
        alert("Se produjo un error, intente más tarde.")
      }
    }
    catch (error: any) {
      alert(error.message)
    }
  }
}
