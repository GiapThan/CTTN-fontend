import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import documentReducer from './documentSlice';

const rootReducer = {
  user: userReducer,
  document: documentReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
