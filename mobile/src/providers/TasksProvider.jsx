import React, { useCallback, useState } from 'react';
import TasksContext from '../contexts/TasksContext';

function TasksProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [tasks, setTasks] = useState([]);

  const startLoading = useCallback(() => {
    setIsLoading(true);
  }, []);

  const initiate = useCallback((initialTasks) => {
    setTasks(initialTasks);

    setIsLoading(false);
    setIsInitialLoading(false);
  }, []);

  const add = useCallback((task) => {
    setTasks((old) => [task, ...old]);
  }, []);

  const complete = useCallback((id) => {
    setTasks((old) =>
      old.map((task) => {
        if (task._id === id) {
          return { ...task, isCompleted: true };
        }
        return task;
      })
    );
  }, []);

  return (
    <TasksContext.Provider
      value={{
        isLoading: isLoading,
        isInitialLoading: isInitialLoading,
        tasks: tasks,
        startLoading: startLoading,
        initiate: initiate,
        add: add,
        complete: complete,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export default TasksProvider;
