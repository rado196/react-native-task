import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import useTasks from '../../hooks/useTasks';
import createTask from '../../api/createTask';

function useFormSubmit() {
  const { add: addNewTask } = useTasks();
  const form = useForm();
  const navigation = useNavigation();

  const onSubmit = useCallback(async (data) => {
    const { task } = await createTask({
      title: data.title,
      description: data.description,
      priority: data.priority,
    });

    addNewTask(task);
    navigation.goBack();
  }, []);

  return {
    onSubmit: onSubmit,
    form: form,
  };
}

export default useFormSubmit;
