import { createSlice } from '@reduxjs/toolkit';

const system = createSlice({
  name: 'system',
  initialState: {
    isOpenSideBar: false,
  },
  reducers: {
    closeOpenSideBar: (state, action) => {
      return { ...state, isOpenSideBar: !state.isOpenSideBar };
    },
  },
});

const { reducer, actions } = system;
export const { closeOpenSideBar } = actions;
export default reducer;
