import React, { useCallback } from 'react';
import styles from './styles';
import { View, Text, Pressable, Alert } from 'react-native';
import useCompleteTask from './useCompleteTask';

function TaskCard({ task }) {
  const { complete } = useCompleteTask(task);

  const onPress = useCallback(() => {
    Alert.alert(
      'Complete?',
      'Are you sure you want to mark task as completed?',
      [
        {
          style: 'destructive',
          text: 'Yes',
          isPreferred: true,
          onPress: complete,
        },
        {
          style: 'cancel',
          text: 'No',
        },
      ]
    );
  }, [complete]);

  return (
    <Pressable onPress={task.isCompleted ? undefined : onPress}>
      <View style={[styles.root, task.isCompleted && styles.completed]}>
        <View style={styles.titleBlock}>
          <Text style={styles.title}>{task.title}</Text>
          {task.priority === 'high' && (
            <View style={styles.highBlock}>
              <Text style={styles.high}>high</Text>
            </View>
          )}
        </View>

        <Text style={styles.description}>{task.description}</Text>
      </View>
    </Pressable>
  );
}

export default TaskCard;
