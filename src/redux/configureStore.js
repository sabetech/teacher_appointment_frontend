import { configureStore } from "@reduxjs/toolkit";
import reservationsReducer from "../features/reservationsSlice";
import user from '../features/usersSlice';

const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
    user: user
  },
});

export default store;
