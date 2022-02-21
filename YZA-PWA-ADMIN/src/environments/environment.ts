export const environment = {
  production: false,
  STORAGE_URL: 'http://127.0.0.1:10000/devstoreaccount1/reportecanibalizacion',
  // API_URL: "https://apim-canibalizacion-poc-eastus2-01.azure-api.net",
  API_URL: "https://localhost:44366",
  ENDPOINT_PERIODO: '/api/Periodo',
  ENDPOINT_EXCEL_FORMAT: '/api/File/ReporteCanibalizacion',
  ENDPOINT_CARGA_ARCHIVO: '/api/Log/GetCargaArchivoByPeriodoId/', 
  ENDPOINT_DETALLE_CARGA_ARCHIVO: '/api/Log/GetDetalleCargaArchivoByCargaId/',
  BLOB_SAS_URL: "https://yzapwablob.blob.core.windows.net/?sv=2020-08-04&ss=bfqt&srt=co&sp=rwdlacupitfx&se=2060-02-03T03:54:24Z&st=2022-02-02T19:54:24Z&spr=https&sig=UovLO0%2Bfpnmai2OoRWmPJar8sxokbYkEfjnEqeJ%2FbNw%3D",
  BLOB_CONTAINER_NAME: "yza-container",
  //Active directory
  clienteId: '106a9363-5976-4a32-8967-50cfa2f769db',
  dirId: 'https://login.microsoftonline.com/66f9ab85-de1a-40d4-b7bb-21565ad57cce',
  redUrl: 'http://localhost:4200',
  // Headers
  Ocp_Apim_Subscription_Key: "52a9cfd90836490ea6cf7bc25f3bf744"
};
