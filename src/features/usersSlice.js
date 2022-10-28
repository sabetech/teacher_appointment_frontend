import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login, signup } from "../services/api";

export const signInUser = createAsyncThunk("users/getUser", async (user_credentials, {rejectWithValue}) => {
  try{
    const response = await login(user_credentials);
    if (response.data.status.code === 200) {
      
      return { 
        data:response.data.status.data, 
        authorization: response.header
      };
    }

  }catch(e){

    rejectWithValue("Exception:::". e.getMessage());

  }
});

export const createUser = createAsyncThunk("users/createUser", async (user_credentials, {rejectWithValue}) => {
  try{
    
    const response = await signup(user_credentials);
    console.log(response)
    if (response.data.status.code === 200) {
      
      return { 
        data:response.data.status.data, 
        authorization: response.header
      };
    }
    console.log("content of response::", response.status)
  }catch(e){
    console.log("I dount you come here!!!");
    console.log("WHAT ERROR IS THIS ", e);
    rejectWithValue("Exception:::"+ e);

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
    .addCase(signInUser.pending, (state) => {
      state.status = "Loading";
    })
    .addCase(signInUser.fulfilled, (state, action) => {
      state.status = "Ready";
      state.user = action.payload;
    })
    .addCase(signInUser.rejected, (state, action) => {
      //an error occurred. get error action payload
    })
    .addCase(createUser.pending, (state) => {
      state.status = "Loading";
    })
    .addCase(createUser.fulfilled, (state, action) => {
      state.status = "Ready";
      console.log("SUCCESS::", action.payload);
      state.user = action.payload;
    })
    .addCase(createUser.rejected, (state, action) => {
      //an error occurred. get error action payload
      state.status = "Ready";
      console.log("ARE YOU ERROR:::", action.payload);
      state.user = action.payload;
    });
  }
});

export const getUser = (state) => state.user.user
export const getStatus = (state) => state?.user?.status
export const getError = (state) => state?.user?.error

export default userSlice.reducer;