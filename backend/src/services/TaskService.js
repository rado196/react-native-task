import TaskModel, { PRIORITY_LOW } from '../models/Task';

const fields = [
  'title',
  'description',
  'priority',
  'isCompleted',
  'createdAt',
  'updatedAt',
];

export async function getCount({ hideCompleted = false }) {
  const query = TaskModel.countDocuments();
  if (hideCompleted) {
    query.where('isCompleted', false);
  }

  const total = await query.exec();
  return total;
}

export async function getAll({
  hideCompleted = false,
  limit = 50,
  offset = 0,
  orderBy = 'createdAt',
  orderDir = 'desc',
}) {
  const query = TaskModel.find();
  if (hideCompleted) {
    query.where('isCompleted', false);
  }

  const tasks = await query
    .select(fields)
    .limit(limit)
    .skip(offset)
    .sort({ [orderBy]: orderDir })
    .exec();

  return tasks;
}

export async function getById(taskId) {
  const task = await TaskModel.findById(taskId).select(fields).exec();
  return task;
}

export async function create({ title, description, priority = PRIORITY_LOW }) {
  const now = new Date();
  const task = await TaskModel.create({
    title: title,
    description: description,
    priority: priority,
    createdAt: now,
    updatedAt: now,
  });

  return task;
}

export async function complete(taskId) {
  const task = await TaskModel.updateOne()
    .where('_id', taskId)
    .where('isCompleted', false)
    .set('isCompleted', true)
    .set('updatedAt', new Date())
    .exec();

  return task;
}
