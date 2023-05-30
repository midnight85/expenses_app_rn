import React from 'react';

import {StyleSheet, Text} from 'react-native';
import {GlobalStyles} from '../constants/styles';
import {DATA} from '../temp_data/data';
import {ExpensesOutput} from '../components/ExpensesOutput';

const RecentExpenses = () => {
  const getDateMinusDays = (date, days) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
  };
  const recentExpenses = DATA.filter(item => {
    const today = new Date();
    const sevenDays = getDateMinusDays(today, 12);
    return item.date >= sevenDays && item.date <= today;
  });
  return <ExpensesOutput periodName="Last 12 days" items={recentExpenses} />;
};
const styles = StyleSheet.create({
  text: {
    color: GlobalStyles.colors.textColor,
  },
});
export default RecentExpenses;
