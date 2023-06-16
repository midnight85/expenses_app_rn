import AsyncStorage from '@react-native-async-storage/async-storage';

const EXPENSES_LIST = 'EXPENSES_LIST';
export const readArrayFromStorage = async () => {
  try {
    const arrayString = await AsyncStorage.getItem(EXPENSES_LIST);
    const parsedArray = JSON.parse(arrayString);
    if (parsedArray) {
      return parsedArray;
    }
  } catch (error) {
    console.error('Error reading array from storage:', error);
  }
};

export const updateAsyncStorage = async newState => {
  try {
    await AsyncStorage.setItem(EXPENSES_LIST, JSON.stringify(newState));
  } catch (error) {
    console.error('Error adding item to array and AsyncStorage:', error);
  }
};
