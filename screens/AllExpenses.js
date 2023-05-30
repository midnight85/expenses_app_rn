import React from 'react';

import {StyleSheet, View} from 'react-native';
import {ExpensesOutput} from '../components/ExpensesOutput';
import {DATA} from '../temp_data/data';
import {GlobalStyles} from '../constants/styles';

const AllExpenses = () => {
  return (
    <View style={styles.container}>
      <ExpensesOutput periodName="total" items={DATA} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default AllExpenses;
