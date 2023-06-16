import {ADD_ITEM, GET_ASYNCSTORAGE, REMOVE_ITEM, UPDATE_ITEM} from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const id = new Date().toISOString() + Math.random().toString();
      return [...state, {id, ...action.payload}];
    }
    case UPDATE_ITEM: {
      const updateIndex = state.findIndex(
        item => item.id === action.payload.id,
      );
      const updatedItem = {...state[updateIndex], ...action.payload.data};
      return [
        ...state.slice(0, updateIndex),
        updatedItem,
        ...state.slice(updateIndex + 1),
      ];
    }
    case REMOVE_ITEM: {
      return [...state.filter(item => item.id !== action.payload)];
    }
    case GET_ASYNCSTORAGE: {
      return [...action.payload];
    }
    default: {
      return state;
    }
  }
};
