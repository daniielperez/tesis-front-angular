/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  clientId: "frontendappangular",
  clientSecret: "q%Us6Mq**3!@Z7BwI%ei4opRZl%9Qr",
  apiUrl: "http://localhost:8090/api",
  currentThemeLife: 604800000, // 1 week in milliseconds
};
