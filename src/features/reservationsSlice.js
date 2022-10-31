import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createReservation,
  getReservations,
  updateReservation,
} from "../services/api";

export const getBooking = createAsyncThunk(
  "reservations/getBooking",
  async (token, { rejectWithValue }) => {
    try {
      const response = await getReservations({ token });
      console.log("response", response);
      return response;
    } catch (e) {
      rejectWithValue("Exception:::" + e);
    }
  }
);

export const updateBooking = createAsyncThunk(
  "reservations/updateReservation",
  async (reservation, { rejectWithValue }) => {
    try {
      const response = await updateReservation({ reservation });
      return response;
    } catch (e) {
      rejectWithValue("Exception:::" + e);
    }
  }
);

export const addBooking = createAsyncThunk(
  "reservations/addBooking",
  async (reservation, { rejectWithValue }) => {
    try {
      const response = await createReservation({ reservation });
      return response;
    } catch (e) {
      rejectWithValue("Exception:::" + e);
    }
  }
);

const initialState = {
  reservations: [],
};

const reservationsSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {},
  extraReducers: {
    [getBooking.fulfilled]: (state, action) => {
      state.reservations = action.payload;
    },
    [getBooking.rejected]: (state, action) => {
      state.reservations = action.payload;
    },
    [updateBooking.fulfilled]: (state, action) => {
      state.reservations = action.payload;
    },
  },
});

export default reservationsSlice.reducer;
