import React, { forwardRef } from 'react';
import styles from './styles';
import { View, Text } from 'react-native';
import PickerSelect from 'react-native-picker-select';

const Dropdown = forwardRef(function Dropdown(
  { label, required = false, ...props },
  forwardedRef
) {
  return (
    <View style={styles.root}>
      {label && (
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{label}</Text>
          {required && <Text style={[styles.label, styles.required]}>*</Text>}
        </View>
      )}

      <PickerSelect
        ref={forwardedRef}
        placeholder={{}}
        {...props}
        style={{
          inputAndroid: styles.dropdown,
          inputIOS: styles.dropdown,
        }}
      />
    </View>
  );
});

export default Dropdown;
