import {ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM} from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const id = new Date().toString() + Math.random().toString();
      return [...state, {id, ...action.payload}];
    }
    case UPDATE_ITEM: {
      const updateIndex = state.findIndex(
        item => item.id === action.payload.id,
      );
      const updateItem = {...state[updateIndex], ...action.payload};
      return [
        ...state.slice(0, updateIndex),
        updateItem,
        ...state.slice(updateIndex + 1),
      ];
    }
    case REMOVE_ITEM: {
      return [...state.filter(item => item.id !== action.payload)];
    }
    default: {
      return state;
    }
  }
};
