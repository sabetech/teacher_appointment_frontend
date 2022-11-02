import { redirect } from "react-router-dom";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getReservations, makeReservation } from "../services/api";

export const fetchReservations = createAsyncThunk(
  "reservations/getReservation",
  async (token) => {
    const response = await getReservations({token});
    if (!response) {
      localStorage.clear();
      redirect("/");
      return;
    }
    return response;
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
      console.log("Exception:::", e);
      rejectWithValue(e.message);
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
  extraReducers(builder) {
    builder
    .addCase(fetchReservations.fulfilled, (state, action) => {
      state.reservations = action.payload;
    })
    .addCase(createReservation.pending, (state) => {
      state.status = "Loading";
    })
    .addCase(createReservation.fulfilled, (state, action) => {
      console.log("SHOULD NOT SHOW ON ERROR::", action.payload);
      state.status = "Success";
    })
    .addCase(createReservation.rejected, (state, action) => {
      console.log("FAILED HERE");
      state.status = "Failed";
      state.message = action.payload;
      console.log("ERRIOR MESSAGE::",action.payload)
    })
  },
});

export default reservationsSlice.reducer;
