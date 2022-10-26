import { configureStore } from "@reduxjs/toolkit";
import reservationsReducer from "../features/reservationsSlice";

const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
  },
});

export default store;
