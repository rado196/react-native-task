import { useContext } from 'react';
import TasksContext from '../contexts/TasksContext';

function useTasks() {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error(`useTasks must be called inside of <TasksProvider />`);
  }

  return context;
}

export default useTasks;
