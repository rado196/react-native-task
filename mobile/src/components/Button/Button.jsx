import React from 'react';
import styles from './styles';
import { TouchableOpacity, Text } from 'react-native';

function Button({ title, activeOpacity = 0.75, onPress }) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={activeOpacity}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button;
