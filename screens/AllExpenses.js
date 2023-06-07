import React from 'react';

import {StyleSheet, View} from 'react-native';
import {ExpensesOutput} from '../components/ExpensesOutput';
import {GlobalStyles} from '../constants/styles';
import {useExpensesContext} from '../store/context';

const AllExpenses = () => {
  const {state} = useExpensesContext();

  return (
    <View style={styles.container}>
      <ExpensesOutput periodName="total" items={state} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default AllExpenses;
