import { createContext } from 'react';

const TasksContext = createContext({
  isLoading: true,
  isInitialLoading: true,
  tasks: [],
  startLoading: () => {},
  initiate: () => {},
  add: () => {},
  complete: () => {},
});

export default TasksContext;
