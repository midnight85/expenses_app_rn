import React from 'react';

import {StyleSheet, View} from 'react-native';
import {GlobalStyles} from '../constants/styles';
import {CustomButton, IconButton} from '../components/UI';
import {useExpensesContext} from '../store/context';

const ManageExpense = ({route, navigation}) => {
  const {addItem, removeItem, updateItem} = useExpensesContext();
  const editId = route.params?.id;
  React.useLayoutEffect(
    () =>
      navigation.setOptions({
        title: editId ? 'Edit' : 'Add new',
      }),
    [navigation, editId],
  );

  function deleteItemHandler() {
    removeItem(editId);
    navigation.goBack();
  }

  function confirmHandler() {
    if (editId) {
      updateItem(editId, {description: `edited ${editId}`});
    } else {
      addItem({description: `new item`, amount: 10, date: new Date()});
    }
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <CustomButton mode="flat" onPress={cancelHandler} style={styles.button}>
          Cancel
        </CustomButton>
        <CustomButton onPress={confirmHandler} style={styles.button}>
          {editId ? 'Edit' : 'Add'}
        </CustomButton>
      </View>

      {editId && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            size={36}
            color={GlobalStyles.colors.btnColor}
            onPress={deleteItemHandler}
          />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary100,
  },
  deleteContainer: {
    marginTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.accent,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 20,
  },
  button: {minWidth: 120},
});
export default ManageExpense;
