import { createSlice } from '@reduxjs/toolkit';

const document = createSlice({
  name: 'document',
  initialState: {
    idLesson: '',
  },
  reducers: {
    setIdDocView: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

const { reducer, actions } = document;
export const { setIdDocView } = actions;
export default reducer;
