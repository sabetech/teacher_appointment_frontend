import { redirect } from "react-router-dom";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getReservations, makeReservation } from "../services/api";

export const fetchReservations = createAsyncThunk(
  "reservations/getReservation",
  async ({token}) => {
    const response = await getReservations({token});
    if (!response) {
      localStorage.clear();
      redirect("/");
      return;
    }
    return response.json();
  }
);

export const createReservation = createAsyncThunk("reservations/makeReservation", 
  async ({token, teacher, city, reservation_date }, {rejectWithValue}) => {
    try{
      const response = await makeReservation({token, teacher, city, reservation_date});
      if (!response) {
        localStorage.clear();
        redirect("/");
        return;
      }
      return response;
    }catch( e ){
      rejectWithValue("Exception:::"+ e.message());
    }
    
});

const initialState = {
  reservations: [],
  status: "idle",
  message: "",
};

const reservationsSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchReservations.fulfilled]: (state, action) => {
      state.reservations = action.payload;
    },
    [createReservation.pending]: (state) => {
      state.status = "Loading";
    },
    [createReservation.fulfilled]: (state, action) => {
      state.status = "Success";
    },
    [createReservation.rejected]: (state, action) => {
      state.message = action.payload;
    }
  },
});

export default reservationsSlice.reducer;
