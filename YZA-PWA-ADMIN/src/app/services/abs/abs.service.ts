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
      const blockBlobClient = this.containerClient.getBlockBlobClient(inputFile.files[0].name);
      blockBlobClient.url
      await blockBlobClient.uploadData(inputFile.files[0]).then(res => {
        blockBlobClient.setMetadata({ guid: guid }).then(res => {
          // for (let p of this.ps.ObtenerPeriodos()) {
          //   if (p.identificador == guid) {
          //     p.urlDescarga = blockBlobClient.url;
          //     p.nombreArchivo = inputFile.files[0].name;
          //   }
          // }
        })
      });
      alert("Done");
    }
    catch (error: any) {
      alert(error.message)
    }
  }
}
