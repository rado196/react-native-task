import React, { useCallback } from 'react';
import styles from './styles';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../../../components/Button';

function AddNewTask() {
  const navigation = useNavigation();

  const onPress = useCallback(() => {
    navigation.navigate('AddTaskScreen');
  }, []);

  return (
    <View style={styles.root}>
      <Button style={styles.button} title="Add new task" onPress={onPress} />
    </View>
  );
}

export default AddNewTask;
