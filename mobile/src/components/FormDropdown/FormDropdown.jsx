import React, { forwardRef } from 'react';
import styles from './styles';
import { View } from 'react-native';
import { useController } from 'react-hook-form';
import Dropdown from '../Dropdown';

const FormDropdown = forwardRef(function FormDropdown(
  { form, name, rules = {}, ...props },
  forwardedRef
) {
  const { field } = useController({
    control: form.control,
    name: name,
    defaultValue: props.defaultValue || '',
    rules: rules,
  });

  return (
    <View style={styles.root}>
      <Dropdown
        ref={forwardedRef}
        {...props}
        onValueChange={field.onChange}
        value={field.value}
      />
    </View>
  );
});

export default FormDropdown;
