import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

// Need to export all actions and the reducer
// Destructuring the actions from counterSlice.actions
export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;

// Exporting the reducer, because the Redux Store will need it
export default counterSlice.reducer;
