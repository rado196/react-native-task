import { useCallback } from 'react';
import useTasks from '../../../hooks/useTasks';
import completeTask from '../../../api/completeTask';

function useCompleteTask(task) {
  const { complete: completeState } = useTasks();

  const completeApi = useCallback(async () => {
    await completeTask({ taskId: task._id });
    completeState(task._id);
  }, [task._id]);

  return { complete: completeApi };
}

export default useCompleteTask;
