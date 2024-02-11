import { API_BASE_URL } from '@app-env';

async function completeTask({ taskId }) {
  const url = `${API_BASE_URL}/tasks/${taskId}/complete`;
  await fetch(url, {
    method: 'PATCH',
  });
}

export default completeTask;
