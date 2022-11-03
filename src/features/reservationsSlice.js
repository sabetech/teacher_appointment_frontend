import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getReservations,
  makeReservation,
  removeReservation,
} from "../services/api";

export const fetchReservations = createAsyncThunk(
  "reservations/getReservation",
  async (token, { rejectWithValue }) => {
    try {
      const response = await getReservations({ token });
      return response;
    } catch (e) {
      rejectWithValue(e.message);
    }
  }
);

export const createReservation = createAsyncThunk(
  "reservations/makeReservation",
  async ({ token, teacher, city, reservation_date }, { rejectWithValue }) => {
    try {
      const response = await makeReservation({
        token,
        teacher,
        city,
        reservation_date,
      });
      return response;
    } catch (e) {
      console.log("Exception:::", e);
      rejectWithValue(e.message);
    }
  }
);

export const deleteReservation = createAsyncThunk(
  "reservations/deleteReservation",
  async ({ token, reservationId }, { rejectWithValue }) => {
    console.log("id:::", reservationId);
    try {
      const response = await removeReservation({ token, reservationId });
      return response;
    } catch (e) {
      rejectWithValue(e.message);
    }
  }
);

const initialState = {
  reservations: [],
  status: "idle",
  message: "",
};

const reservationsSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    setIdle: (state) => {
      state.status = "idle";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchReservations.fulfilled, (state, action) => {
        state.reservations = action.payload;
      })
      .addCase(fetchReservations.rejected, (state, action) => {
        console.log("FAILED HERE");
        state.status = "FetchReservationFailed";
        state.message = action.payload;
        console.log("ERRIOR MESSAGE::", action.payload);
      })
      .addCase(createReservation.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(createReservation.fulfilled, (state, action) => {
        console.log("Success::", action.payload);
        state.status = "CreateReservationSuccess";
      })
      .addCase(createReservation.rejected, (state, action) => {
        console.log("FAILED HERE");
        state.status = "Failed";
        state.message = action.payload;
        console.log("ERRIOR MESSAGE::", action.payload);
      })
      .addCase(deleteReservation.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(deleteReservation.fulfilled, (state, action) => {
        console.log("Success::", action.payload);
        state.status = "DeleteReservationSuccess";
      })
      .addCase(deleteReservation.rejected, (state, action) => {
        console.log("FAILED HERE");
        state.status = "Failed";
        state.message = action.payload;
        console.log("ERRIOR MESSAGE::", action.payload);
      });
  },
});

export const { setIdle } = reservationsSlice.actions;
export default reservationsSlice.reducer;
