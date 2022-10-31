// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import {
//   createTeacher,
//   getTeachers,
//   getTeacher,
//   updateTeacher,
// } from "../services/api";

// export const getTeachersAsync = createAsyncThunk(
//   "reservations/getTeachersAsync",
//   async (token, { rejectWithValue }) => {
//     try {
//       const response = await getTeachers({ token });
//       return response;
//     } catch (e) {
//       rejectWithValue("Exception:::" + e);
//     }
//   }
// );

// // export const updateBooking = createAsyncThunk(
// //   "reservations/updateReservation",
// //   async (reservation, { rejectWithValue }) => {
// //     try {
// //       const response = await updateReservation({ reservation });
// //       return response;
// //     } catch (e) {
// //       rejectWithValue("Exception:::" + e);
// //     }
// //   }
// // );

// // export const addBooking = createAsyncThunk(
// //   "reservations/addBooking",
// //   async (reservation, { rejectWithValue }) => {
// //     try {
// //       const response = await createReservation({ reservation });
// //       return response;
// //     } catch (e) {
// //       rejectWithValue("Exception:::" + e);
// //     }
// //   }
// // );

// const initialState = {
//   reservations: [],
// };

// export const teachersSlice = createSlice({
//   name: "teachers",
//   initialState,
//   reducers: {},
//   extraReducers: {
//     [getTeachersAsync.fulfilled]: (state, action) => {
//       state.reservations = action.payload;
//     },
//     [getTeachersAsync.rejected]: (state, action) => {
//       state.reservations = action.payload;
//     },
//     // [updateBooking.fulfilled]: (state, action) => {
//     //   state.reservations = action.payload;
//     // },
//   },
// });

// export default teachersSlice.reducer;
