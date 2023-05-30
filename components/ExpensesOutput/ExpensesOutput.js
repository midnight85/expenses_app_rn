import React from 'react';

import {StyleSheet, View, Text} from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import {GlobalStyles} from '../../constants/styles';

const ExpensesOutput = ({periodName, items}) => {
  if (items.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center', fontSize: 20}}>List empty.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ExpensesSummary periodName={periodName} items={items} />
      <ExpensesList items={items} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: -16,
    backgroundColor: GlobalStyles.colors.primary200,
    flex: 1,
  },
});
export default ExpensesOutput;
