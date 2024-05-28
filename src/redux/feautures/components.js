import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cpu: null,
  motherboard: null,
  ram: null,
  psu: null,
  storage: null,
  monitor: null,
};

const builderSlice = createSlice({
  name: 'builder',
  initialState,
  reducers: {
    setComponent: (state, action) => {
      state[action.payload.cat] = action.payload.component;
      console.log(action.payload.cat)
    },
  },
});

export const { setComponent } = builderSlice.actions;

export default builderSlice.reducer;
