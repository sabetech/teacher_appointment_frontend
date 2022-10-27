import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../services/api";

export const createUser = createAsyncThunk("users/createUser", async (user_credentials, {rejectWithValue}) => {
  try{
    const response = await login(user_credentials);
    if (response.status === 200) {
      const { data } = response;
      const authorization = response.headers.get('Authorization');
      return {data, authorization};
    }

  }catch(e){


  }
})

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    status: "idle",
    error: null
  },
  reducers: {
    setIdle: (state) => {
        state.status = "Ready";
      },
    setAppNotReady: (state) => {
      state.status = "Not Ready";
    }
  },
  extraReducers(builder) {
    builder
    .addCase(login.pending, (state) => {
      state.status = "Loading";
    })
    .addCase(login.fulfilled, (state, action) => {
      state.status = "Ready";
      state.user = action.payload;
    })
    .addCase(login.rejected, (state, action) => {
      //an error occurred. get error action payload
    })
  }
});

export const getUser = (state) => state.action.user

export default userSlice.reducer;