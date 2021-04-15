import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact } from './items-actions';

const itemsReduser = createReducer([], {
  [addContact]: (state, { payload }) => {
    console.log('ADD');
    if (state.find(contact => contact.name === payload.name)) {
      alert(`${payload.name} is already in contacts`);
      return state;
    } else return [payload, ...state];
  },
  [deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload.id),
});

export default itemsReduser;
