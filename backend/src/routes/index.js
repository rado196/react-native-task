import express from 'express';

import * as TaskController from '../controllers/TaskController';

function buildRouter() {
  return express.Router({ strict: true, caseSensitive: true });
}

function registerTaskRoutes() {
  const router = buildRouter();
  // route.use(middleware);

  const prefix = '/tasks';

  router.get(prefix, TaskController.getAll);
  router.get(`${prefix}/:taskId`, TaskController.getById);
  router.post(prefix, TaskController.create);
  router.patch(`${prefix}/:taskId/complete`, TaskController.complete);

  return router;
}

export default function registerRoutes(app) {
  app.use('/api', registerTaskRoutes());
  // mote routes ...
}
