import { configureStore } from '@reduxjs/toolkit';
import reservationsReducer from '../features/reservationsSlice';
import teachersReducers from '../features/teachersSlice';
import user from '../features/usersSlice';

const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
    user,
    teacher: teachersReducers,
  },
});

export default store;
