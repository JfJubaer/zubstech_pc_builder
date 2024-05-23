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
      state[action.payload.category] = action.payload.component;
    },
  },
});

export default builderSlice.reducer;
