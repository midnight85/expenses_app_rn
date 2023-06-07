import React from 'react';
import {reducer} from './reducer';
import {ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM} from './actions';

const initial_state = [
  {
    id: '1',
    description: 'description',
    amount: 54.34,
    date: new Date('2023-05-29T00:00:00.000Z'),
  },
  {
    id: '2',
    description: 'description2',
    amount: 64.14,
    date: new Date('2023-05-28T00:00:00.000Z'),
  },
  {
    id: '3',
    description: 'description3',
    amount: 84.24,
    date: new Date('2023-05-27T00:00:00.000Z'),
  },
];

const ExpensesContext = React.createContext(initial_state);

export const ExpensesProvider = ({children}) => {
  const [state, dispatch] = React.useReducer(reducer, initial_state);
  const addItem = data => {
    dispatch({type: ADD_ITEM, payload: data});
  };
  const removeItem = id => {
    dispatch({type: REMOVE_ITEM, payload: id});
  };
  const updateItem = (id, data) => {
    dispatch({type: UPDATE_ITEM, payload: {id, data}});
  };

  const value = {state, addItem, removeItem, updateItem};
  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};
export const useExpensesContext = () => React.useContext(ExpensesContext);
