import { Injectable } from '@angular/core';
import { BlobServiceClient } from "@azure/storage-blob";
import { APService } from '../ap/ap.service';

@Injectable({
  providedIn: 'root'
})
export class ABSService {

  public blobSasUrl = "https://yza.blob.core.windows.net/?sv=2020-08-04&ss=bfqt&srt=co&sp=rwdlacupitfx&se=2022-01-29T04:56:28Z&st=2022-01-28T20:56:28Z&spr=https&sig=E0F4bcazA%2BfZfwxYiPpK93nlFGDR3kEGOYVJsh1%2FcR4%3D";
  public blobServiceClient = new BlobServiceClient(this.blobSasUrl);
  public containerName = "yza-container";
  public containerClient = this.blobServiceClient.getContainerClient(this.containerName);

  constructor(private ps: APService) {
  }
  uploadFiles = async (inputFile: any, guid: string) => {
    try {
      const blockBlobClient = this.containerClient.getBlockBlobClient(inputFile.files[0].name);
      blockBlobClient.url
      await blockBlobClient.uploadData(inputFile.files[0]).then(res => {
        blockBlobClient.setMetadata({ guid: guid }).then(res => {
          for (let p of this.ps.ObtenerPeriodos()) {
            if (p.identificador == guid) {
              p.urlDescarga = blockBlobClient.url;
              p.nombreArchivo = inputFile.files[0].name;
            }
          }
        })
      });
      alert("Done");
    }
    catch (error: any) {
      alert(error.message)
    }
  }
}
