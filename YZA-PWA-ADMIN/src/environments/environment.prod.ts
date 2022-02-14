export const environment = {
  production: true,
  STORAGE_URL: 'http://127.0.0.1:10000/devstoreaccount1/reportecanibalizacion',
  API_URL: "https://apim-canibalizacion-poc-eastus2-01.azure-api.net",
  ENDPOINT_PERIODO: '/api/Periodo',
  ENDPOINT_EXCEL_FORMAT: '/api/File/ReporteCanibalizacion',
  BLOB_SAS_URL: "https://stcanibalizacionpoc02.blob.core.windows.net/?sv=2020-08-04&ss=bfqt&srt=co&sp=rwdlacupitfx&se=2050-02-12T01:28:08Z&st=2022-02-11T17:28:08Z&spr=https&sig=UaRQy9enzTqmVhMxUm1LsMXUuvk75rGdXprvTRKcNg4%3D",
  BLOB_CONTAINER_NAME: "reportecanibalizacion",
  //Active directory
  clienteId: '7796a597-c9c3-4810-8ec3-163cad91872f',
  dirId: 'https://login.microsoftonline.com/66f9ab85-de1a-40d4-b7bb-21565ad57cce',
  redUrl: 'https://ase-canibalizacion-admin-east-01.azurewebsites.net',
  // Headers
  Ocp_Apim_Subscription_Key: "52a9cfd90836490ea6cf7bc25f3bf744"
};
