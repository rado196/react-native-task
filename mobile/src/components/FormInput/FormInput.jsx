import React, { forwardRef } from 'react';
import styles from './styles';
import { View } from 'react-native';
import { useController } from 'react-hook-form';
import Input from '../Input';

const FormInput = forwardRef(function FormInput(
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
      <Input
        ref={forwardedRef}
        {...props}
        onChangeText={field.onChange}
        value={field.value}
      />
    </View>
  );
});

export default FormInput;
