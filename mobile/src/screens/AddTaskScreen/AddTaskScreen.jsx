import React from 'react';
import styles from './styles';
import { SafeAreaView, Text, View } from 'react-native';
import FormInput from '../../components/FormInput';
import FormDropdown from '../../components/FormDropdown';
import Button from '../../components/Button';
import useFormSubmit from './useFormSubmit';

function AddTaskScreen() {
  const { form, onSubmit } = useFormSubmit();

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.section}>
        <Text style={styles.header}>Add new task</Text>
      </View>

      <View style={styles.section}>
        <FormInput
          required={true}
          label="Title"
          form={form}
          name="title"
          rules={{ required: 'Task title is required.' }}
        />
      </View>

      <View style={styles.section}>
        <FormInput
          label="Description"
          form={form}
          name="description"
          multiline={true}
        />
      </View>

      <View style={styles.section}>
        <FormDropdown
          required={true}
          label="Priority"
          form={form}
          name="priority"
          defaultValue="low"
          items={[
            { value: 'high', label: 'High priority' },
            { value: 'low', label: 'Low priority' },
          ]}
        />
      </View>

      <View style={[styles.section, styles.lastSection]}>
        <Button title="Create" onPress={form.handleSubmit(onSubmit)} />
      </View>
    </SafeAreaView>
  );
}

export default AddTaskScreen;
