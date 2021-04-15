import { createReducer } from '@reduxjs/toolkit';
import changeFilter from './filter-actions';

const filterReduser = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default filterReduser;
