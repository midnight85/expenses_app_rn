import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {GlobalStyles} from '../../constants/styles';

const Input = ({label, style, isValid, textInputConfig}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[
          styles.input,
          textInputConfig?.value && !isValid ? styles.invalid : null,
          textInputConfig?.multiline && styles.inputMultiline,
        ]}
        {...textInputConfig}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },

  label: {
    color: GlobalStyles.colors.textColor,
    fontSize: 12,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary200,
    padding: 6,
    borderRadius: 6,
    fontSize: 16,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  invalid: {
    borderWidth: 1,
    borderColor: GlobalStyles.colors.error,
  },
});
export default Input;
