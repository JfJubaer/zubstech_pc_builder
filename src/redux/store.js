import { configureStore } from "@reduxjs/toolkit";
import builderSlice from './feautures/components';


export default configureStore({
  reducer: {
    builder: builderSlice,
  },
});
