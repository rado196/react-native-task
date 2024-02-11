/* eslint-disable no-console */

import expressListRoutes from 'express-list-routes';
import registerRoutes from '../routes';

export default function register(app, callback) {
  registerRoutes(app);

  console.log();
  console.log('='.repeat(64));
  expressListRoutes(app);
  console.log('='.repeat(64));
  console.log();

  callback();
}
