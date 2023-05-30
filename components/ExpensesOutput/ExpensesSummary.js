import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import {GlobalStyles} from '../../constants/styles';

const ExpensesSummary = ({periodName, items}) => {
  const expensesSum = items.reduce((sum, item) => {
    return sum + item.amount;
  }, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.accent,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  period: {
    fontSize: 14,
    color: GlobalStyles.colors.textColor,
    textTransform: 'capitalize',
  },
  sum: {
    fontSize: 16,
    fontWeight: 'bold',
    color: GlobalStyles.colors.textColor,
  },
});
export default ExpensesSummary;
