import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getReservation = createAsyncThunk(
  "reservations/getReservation",
  async () => {
    const response = await fetch(
      "http://localhost:3000/api/v1/users/1/reservations"
    );
    return response.json();
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
    [getReservation.fulfilled]: (state, action) => {
      state.reservations = action.payload;
    },
  },
});

export default reservationsSlice.reducer;
