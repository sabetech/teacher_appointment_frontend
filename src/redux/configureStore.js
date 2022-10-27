import { configureStore } from "@reduxjs/toolkit";
import reservationsReducer from "../features/reservationsSlice";
import userReducer from "../features/usersSlice"

const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
    user: userReducer
  },
});

export default store;
