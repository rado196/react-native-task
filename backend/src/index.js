/* eslint-disable no-console */

import './core/environment';

import * as database from './core/database';
import startHttpServer from './core/http-server';
import registerRoutes from './core/register-routes';

(async function () {
  await database.connect();
  console.log('>>> Database connection established.');
  console.log();

  const { app, port, postRegisterRouter } = await startHttpServer();
  registerRoutes(app, postRegisterRouter);

  console.log(`>>> App listening on port ${port} !!!`);
  console.log();
})();
