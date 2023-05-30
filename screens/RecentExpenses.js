import React from 'react';

import {StyleSheet, Text} from 'react-native';
import {GlobalStyles} from '../constants/styles';

const RecentExpenses = () => {
  return <Text style={styles.text}>RecentExpenses</Text>;
};
const styles = StyleSheet.create({
  text: {
    color: GlobalStyles.colors.textColor,
  },
});
export default RecentExpenses;
