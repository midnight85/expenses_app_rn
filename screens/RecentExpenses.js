import React from 'react';

import {StyleSheet} from 'react-native';
import {GlobalStyles} from '../constants/styles';
import {ExpensesOutput} from '../components/ExpensesOutput';
import {useExpensesContext} from '../store/context';

const RecentExpenses = () => {
  const {state} = useExpensesContext();

  const getDateMinusDays = (date, days) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
  };
  const recentExpenses = state.filter(item => {
    const itemDate = new Date(item.date);
    const today = new Date();
    const sevenDays = getDateMinusDays(today, 7);
    return itemDate >= sevenDays && itemDate <= today;
  });
  return <ExpensesOutput periodName="Last 7 days" items={recentExpenses} />;
};
const styles = StyleSheet.create({
  text: {
    color: GlobalStyles.colors.textColor,
  },
});
export default RecentExpenses;
