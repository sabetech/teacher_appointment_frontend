import { configureStore } from "@reduxjs/toolkit";
import reservationsReducer from "../features/reservationsSlice";

const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
    teachers: teachersReducer,
  },
});

export default store;
