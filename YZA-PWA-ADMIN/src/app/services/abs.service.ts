import { ElementRef, Injectable } from '@angular/core';
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

  uploadFiles = async (inputFile: any) => {
    try {
      const blockBlobClient = this.containerClient.getBlockBlobClient(inputFile.files[0].name);
      await blockBlobClient.uploadData(inputFile.files[0]).then(res => {
        blockBlobClient.setMetadata({ gui: "123" }).then(res => {
          blockBlobClient.download();
        })
      });
      alert("Done");
    }
    catch (error: any) {
      alert(error.message)
    }
  }
}
