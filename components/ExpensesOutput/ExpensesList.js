import React from 'react';

import {FlatList, StyleSheet, View} from 'react-native';
import ExpensesItem from './ExpensesItem';

const ExpensesList = ({items}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ExpensesItem
            id={item.id}
            description={item.description}
            amount={item.amount}
            date={item.date}
          />
        )}
        style={styles.list}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingBottom: 16,
  },
  list: {
    rowGap: 16,
    columnGap: 16,
  },
});
export default ExpensesList;
