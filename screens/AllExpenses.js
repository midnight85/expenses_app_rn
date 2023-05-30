import React from 'react';

import {StyleSheet, Text} from 'react-native';
import {GlobalStyles} from '../constants/styles';

const AllExpenses = () => {
  return <Text style={styles.text}>AllExpenses</Text>;
};
const styles = StyleSheet.create({
  text: {
    color: GlobalStyles.colors.textColor,
  },
});
export default AllExpenses;
