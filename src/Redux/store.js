import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import documentReducer from './documentSlice';
import systemReducer from './systemSlice';

const rootReducer = {
  user: userReducer,
  document: documentReducer,
  system: systemReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
