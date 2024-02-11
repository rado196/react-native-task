import { API_BASE_URL } from '@app-env';

async function createTask({ title, description, priority }) {
  const response = await fetch(`${API_BASE_URL}/tasks`, {
    method: 'POST',
    body: JSON.stringify({
      title: title,
      description: description,
      priority: priority,
    }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });

  const parsed = await response.json();
  const createdTask = parsed.response.task;

  return {
    task: createdTask,
  };
}

export default createTask;
