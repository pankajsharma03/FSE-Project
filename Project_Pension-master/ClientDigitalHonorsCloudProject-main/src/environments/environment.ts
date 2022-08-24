// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // pensionerDetailApi: 'http://20.204.241.170/api/PensionerDetail/getPensionerDetails',
  authApi: 'http://52.191.21.29/api/auth',
  //processPensionApi: 'http://20.207.73.197/api/ProcessPension'
  //authApi: 'http://localhost:35485/api/auth',
  processPensionApi: 'http://localhost:37356/api/ProcessPension',
  pensionerDetailApi: 'http://localhost:4374/api/PensionerDetail/getPensionerDetails'


};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
