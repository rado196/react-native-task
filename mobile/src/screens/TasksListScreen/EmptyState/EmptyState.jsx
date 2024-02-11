import React from 'react';
import styles from './styles';
import { View, Text } from 'react-native';

function EmptyState() {
  return (
    <View style={styles.root}>
      <Text style={styles.message}>There is no tasks for today !!!</Text>
    </View>
  );
}

export default EmptyState;
