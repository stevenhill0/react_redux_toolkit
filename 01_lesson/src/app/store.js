import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  // Place reducers you create in the reducer object
  reducer: {
    counter: counterReducer,
  },
});
