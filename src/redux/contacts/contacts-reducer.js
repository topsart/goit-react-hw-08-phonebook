import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactSuccess,
  deleteContactSuccess,
  changeFilter,
  fetchContactSuccess,
} from './contacts-actions';

const items = createReducer([], {
  // НАПИШИТЕ ПРИМЕР ПО ДАБАВЛЕНИЮ ПРОВЕРКИ НА ИМЕЮЩЕЕСЯ ИМЯ, ПОЖАЛУЙСТА!!!!
  // [actions.addContact]: (state, {payload}) => state.find((contact) => contact.name === payload.name ? alert(`${payload.name} already exist`) : [...state, payload]),
  [fetchContactSuccess]: (state, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {});

export default combineReducers({ items, filter, error });
