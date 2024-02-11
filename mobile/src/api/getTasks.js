import { API_BASE_URL } from '@app-env';

async function getTasks({ orderBy = 'createdAt', orderDir = 'desc' } = {}) {
  const url = `${API_BASE_URL}/tasks?hideCompleted=false&order=${orderBy}:${orderDir}`;

  const response = await fetch(url);
  const parsed = await response.json();

  const total = parsed.metadata.total;
  const tasks = parsed.response.tasks;

  return {
    total: total,
    tasks: tasks,
  };
}

export default getTasks;
