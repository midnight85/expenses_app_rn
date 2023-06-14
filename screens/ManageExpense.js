import React from 'react';

import {StyleSheet, View} from 'react-native';
import {GlobalStyles} from '../constants/styles';
import {IconButton} from '../components/UI';
import {useExpensesContext} from '../store/context';
import {ExpenseForm} from '../components/ExpensesManage';

const ManageExpense = ({route, navigation}) => {
  const {state, addItem, removeItem, updateItem} = useExpensesContext();
  const editId = route.params?.id;
  const editItem = state.find(item => item.id === editId);
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

  function confirmHandler(obj) {
    if (editId) {
      updateItem(editId, obj);
    } else {
      addItem(obj);
    }
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        editId={editId}
        editItem={editItem}
        deleteItemHandler={deleteItemHandler}
        confirmHandler={confirmHandler}
        cancelHandler={cancelHandler}
      />
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
});
export default ManageExpense;
