import { useCallback, useEffect } from 'react';
import useTasks from './useTasks';
import getTasks from '../api/getTasks';

function useLoadTasks() {
  const { isInitialLoading, initiate } = useTasks();

  const loadTasks = useCallback(async (orderBy) => {
    const { tasks } = await getTasks({
      orderBy: orderBy,
      orderDir: 'desc',
    });

    initiate(tasks);
  }, []);

  useEffect(() => {
    if (isInitialLoading) {
      loadTasks();
    }
  }, [isInitialLoading]);

  return {
    isReady: !isInitialLoading,
    loadTasks: loadTasks,
  };
}

export default useLoadTasks;
