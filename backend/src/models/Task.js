import { Schema, model } from 'mongoose';

export const PRIORITY_HIGH = 'high';
export const PRIORITY_LOW = 'low';

const defaultPriority = PRIORITY_LOW;

const priorities = {
  [PRIORITY_HIGH]: 2,
  [PRIORITY_LOW]: 1,
};

const TaskSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    index: true,
  },
  description: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    required: true,
    enum: Object.keys(priorities),
    default: defaultPriority,
  },
  priorityInt: {
    type: Number,
    required: true,
    enum: Object.values(priorities),
    default: priorities[defaultPriority],
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  updatedAt: {
    type: Date,
    required: true,
  },
});

TaskSchema.pre('save', function (next) {
  this.priorityInt = priorities[this.priority];
  return next();
});

const Task = model('Task', TaskSchema);
export default Task;
