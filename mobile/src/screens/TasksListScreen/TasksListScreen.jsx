import React, { useCallback } from 'react';
import styles from './styles';
import { SafeAreaView, View, FlatList } from 'react-native';
import useTasks from '../../hooks/useTasks';
import EmptyState from './EmptyState';
import Divider from './Divider';
import OrderBy from './OrderBy';
import TaskCard from './TaskCard';
import AddNewTask from './AddNewTask';

function TasksListScreen() {
  const { tasks } = useTasks();

  const keyExtractor = useCallback((item) => item._id, []);
  const renderItem = useCallback(({ item }) => <TaskCard task={item} />, []);

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <FlatList
          keyExtractor={keyExtractor}
          data={tasks}
          ListEmptyComponent={EmptyState}
          ListHeaderComponent={OrderBy}
          renderItem={renderItem}
          ItemSeparatorComponent={Divider}
        />
      </View>

      <View style={styles.add}>
        <AddNewTask />
      </View>
    </SafeAreaView>
  );
}

export default TasksListScreen;
