import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk("users/createUser", async () => {
  const response = await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        name: "",
        email: "",
        password: "test",
      },
    }),
  });
  return response.json();
});

const initialState = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [createUser.fulfilled]: (state, action) => {
      state.reservations = action.payload;
    },
  },
});

export default usersSlice.reducer;
