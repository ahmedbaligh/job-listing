import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  role: null,
  level: null,
  languages: [],
  tools: []
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialState,
  reducers: {
    addFilter: (state, action) => {
      const { type, filter } = action.payload;

      if (type === 'role' || type === 'level') {
        state[type] = filter;
        return;
      }

      if (state[type].includes(filter)) return;

      state[type].push(filter);
    },
    removeFilter: (state, action) => {
      const { type, filter } = action.payload;

      if (type === 'role' || type === 'level') {
        state[type] = null;
        return;
      }

      const indexOfFilterToRemove = state[type].indexOf(filter);
      state[type].splice(indexOfFilterToRemove, 1);
    },
    clearFilters: () => {
      return initialState;
    }
  }
});

export const { addFilter, removeFilter, clearFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
