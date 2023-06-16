import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Input} from './index';
import {CustomButton} from '../UI';

const ExpenseForm = ({editId, editItem, cancelHandler, confirmHandler}) => {
  const [formState, setFormState] = React.useState({
    amount: {
      value: editId ? editItem.amount.toString() : '',
      isValid: !!editItem,
    },
    date: {
      value: editId ? editItem.date.slice(0, 10) : '',
      isValid: !!editItem,
    },
    description: {
      value: editId ? editItem.description : '',
      isValid: !!editItem,
    },
  });

  const handleChange = (key, value) => {
    setFormState(prevState => ({
      ...prevState,
      [key]: {value, isValid: true},
    }));
  };
  const onSubmit = () => {
    const obj = {
      amount: Number(formState.amount.value),
      date: new Date(formState.date.value).toISOString(),
      description: formState.description.value,
    };
    console.log(obj);
    const amountIsValid =
      !isNaN(obj.amount) && obj.amount.toString().length > 0;
    const dateIsValid = obj.date.toString() !== 'Invalid Date';
    const descriptionIsValid = obj.description.trim().length > 0;
    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      setFormState(prev => {
        return {
          amount: {value: prev.amount.value, isValid: amountIsValid},
          date: {value: prev.date.value, isValid: dateIsValid},
          description: {
            value: prev.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    }
    confirmHandler(obj);
  };
  const isBtnDisabled =
    !formState.date.value ||
    !formState.amount.value ||
    !formState.description.value;
  return (
    <>
      <View style={styles.container}>
        <View style={styles.row}>
          <Input
            label="Amount"
            style={{flex: 1}}
            isValid={formState.amount.isValid}
            textInputConfig={{
              keyboardType: 'decimal-pad',
              onChangeText: value => {
                handleChange('amount', value);
              },
              value: formState.amount.value,
            }}
          />
          <Input
            label="Date"
            style={{flex: 1}}
            isValid={formState.date.isValid}
            textInputConfig={{
              keyboardType: 'decimal-pad',
              placeholder: 'YYYY-M-D',
              maxLength: 10,
              onChangeText: value => {
                handleChange('date', value);
              },
              value: formState.date.value,
            }}
          />
        </View>
        <Input
          label="Description"
          isValid={formState.description.isValid}
          textInputConfig={{
            multiline: true,
            onChangeText: value => {
              handleChange('description', value);
            },
            value: formState.description.value,
          }}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <CustomButton mode="flat" onPress={cancelHandler} style={styles.button}>
          Cancel
        </CustomButton>
        <CustomButton
          onPress={onSubmit}
          style={[styles.button, isBtnDisabled ? styles.disabled : null]}
          disabled={isBtnDisabled}>
          {editId ? 'Edit' : 'Add'}
        </CustomButton>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    columnGap: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 20,
  },
  button: {
    minWidth: 120,
  },
  disabled: {
    opacity: 0.6,
  },
});

export default ExpenseForm;
