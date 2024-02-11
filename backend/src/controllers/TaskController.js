/* eslint-disable no-console */

import { PRIORITY_LOW } from '../models/Task';
import * as response from '../helpers/response';
import * as TaskService from '../services/TaskService';

// GET: /api/tasks
export async function getAll(req, res) {
  const order = req.query['order'] || 'createdAt:desc';
  const limit = req.query['limit'] || 50;
  const offset = req.query['offset'] || 0;

  const hideCompleted = (req.query['hideCompleted'] || 'true') === 'true';

  const [orderBy, orderDir] = order.split(':');
  const orderByField = orderBy === 'priority' ? 'priorityInt' : orderBy;

  try {
    const total = await TaskService.getCount({
      hideCompleted: hideCompleted,
    });

    const tasks = await TaskService.getAll({
      hideCompleted: hideCompleted,
      orderBy: orderByField,
      orderDir: orderDir || 'desc',
      limit: limit,
      offset: offset,
    });

    response.ok(
      res,
      {
        tasks: tasks,
      },
      {
        total: total,
        limit: limit,
        offset: offset,
      }
    );
  } catch (e) {
    console.error(e);
    response.internalServerError(res, e);
  }
}

// GET: /api/tasks/:taskId
export async function getById(req, res) {
  try {
    const task = await TaskService.getById(req.params.taskId);
    response.ok(res, { task: task });
  } catch (e) {
    console.error(e);
    response.internalServerError(res, e);
  }
}

// GET: /api/tasks
export async function create(req, res) {
  try {
    const priority = req.body.priority || PRIORITY_LOW;
    const task = await TaskService.create({
      title: req.body.title,
      description: req.body.description,
      priority: priority,
    });

    response.created(res, { task: task });
  } catch (e) {
    console.error(e);
    response.internalServerError(res, e);
  }
}

// PATCH: /api/tasks/:taskId/complete
export async function complete(req, res) {
  try {
    const task = await TaskService.complete(req.params.taskId);
    response.ok(res, { task: task });
  } catch (e) {
    console.error(e);
    response.internalServerError(res, e);
  }
}
