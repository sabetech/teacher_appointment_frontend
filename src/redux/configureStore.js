
import { configureStore } from "@reduxjs/toolkit";
import reservationsReducer from "../features/reservationsSlice";
import user from "../features/usersSlice";
import teachersReducer from "../features/teacherSlice";


const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
    user: user,
    teachers: teachersReducer,
  },
});

export default store;
