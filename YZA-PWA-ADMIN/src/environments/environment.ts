// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  STORAGE_URL: 'http://127.0.0.1:10000/devstoreaccount1/reportecanibalizacion',
  API_URL: 'https://localhost:44366', 
  ENDPOINT_PERIODO: '/api/Periodo',
  ENDPOINT_EXCEL_FORMAT: '/api/File/ReporteCanibalizacion',
  BLOB_SAS_URL: "https://yzapwablob.blob.core.windows.net/?sv=2020-08-04&ss=bfqt&srt=co&sp=rwdlacupitfx&se=2060-02-03T03:54:24Z&st=2022-02-02T19:54:24Z&spr=https&sig=UovLO0%2Bfpnmai2OoRWmPJar8sxokbYkEfjnEqeJ%2FbNw%3D",
  BLOB_CONTAINER_NAME: "yza-container"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
