import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/UserSlice";

// eslint-disable-next-line react-refresh/only-export-components
export default configureStore({
  reducer: {
    user: userReducer
  },
});