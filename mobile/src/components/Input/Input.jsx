import React, { forwardRef } from 'react';
import styles from './styles';
import { View, TextInput, Text } from 'react-native';

const Input = forwardRef(function Input(
  { label, required = false, ...props },
  forwardedRef
) {
  const propsClone = { ...props };
  if (propsClone.multiline) {
    propsClone.numberOfLines = 10;
  }

  return (
    <View style={styles.root}>
      {label && (
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{label}</Text>
          {required && <Text style={[styles.label, styles.required]}>*</Text>}
        </View>
      )}
      <TextInput
        ref={forwardedRef}
        {...propsClone}
        style={[styles.input, propsClone.multiline ? styles.multiline : null]}
      />
    </View>
  );
});

export default Input;
