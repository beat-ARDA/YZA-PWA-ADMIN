import { Injectable } from '@angular/core';
import { BlobServiceClient } from "@azure/storage-blob";

@Injectable({
  providedIn: 'root'
})
export class ABSService {

  public blobSasUrl = "https://yza.blob.core.windows.net/?sv=2020-08-04&ss=bfqt&srt=co&sp=rwdlacupitfx&se=2022-01-28T01:22:26Z&st=2022-01-27T17:22:26Z&spr=https&sig=MdHoNEUuQxacHI6%2FP9B3uLe3ncCO9e6t1W6pq2LDu7M%3D";
  public blobServiceClient = new BlobServiceClient(this.blobSasUrl);
  public containerName = "yza-container";
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
