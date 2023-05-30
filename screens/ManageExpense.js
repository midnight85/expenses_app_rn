import React from 'react';

import {StyleSheet, Text} from 'react-native';
import {GlobalStyles} from '../constants/styles';

const ManageExpense = () => {
  return <Text style={styles.text}>ManageExpense</Text>;
};
const styles = StyleSheet.create({
  text: {
    color: GlobalStyles.colors.textColor,
  },
});
export default ManageExpense;
