import React from 'react';

import {Pressable, StyleSheet, Text, View} from 'react-native';
import {GlobalStyles} from '../../constants/styles';
import {useNavigation} from '@react-navigation/native';

const ExpenseItem = ({id, description, date, amount}) => {
  const navigation = useNavigation();

  function itemPressHandler() {
    navigation.navigate('ManageExpense', {id});
  }

  return (
    <Pressable
      onPress={itemPressHandler}
      style={({pressed}) => pressed && styles.pressed}>
      <View style={styles.container}>
        <View>
          <Text style={[styles.text, styles.description]}>{description}</Text>
          <Text style={styles.text}>
            {new Date(date).toISOString().slice(0, 10)}
          </Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>${amount}</Text>
        </View>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: GlobalStyles.colors.textColor,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  amount: {
    color: GlobalStyles.colors.accent,
    fontWeight: 'bold',
  },
  pressed: {
    opacity: 0.75,
  },
});
export default ExpenseItem;
