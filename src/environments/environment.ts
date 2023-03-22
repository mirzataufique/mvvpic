// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { NgxLoggerLevel } from 'ngx-logger';
export const environment = {
  production: true,
  baseurl :'http://localhost:3000/',
  logLevel: NgxLoggerLevel.INFO, // you can put here according to your need {INFO / WARN / DEBUG / ERROR / FATAL / LOG / }
  serverLogLevel: NgxLoggerLevel.OFF
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
