import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login, logout, signup } from '../services/api';

export const signInUser = createAsyncThunk(
  'users/getUser',
  async (user_credentials, { rejectWithValue }) => {
    try {
      const response = await login(user_credentials);
      if (response.data.status.code === 200) {
        return {
          data: response.data.status.data,
          authorization: response.header,
        };
      }
    } catch (e) {
      rejectWithValue('Exception:::'.e.getMessage());
    }
  },
);

export const createUser = createAsyncThunk(
  'users/createUser',
  async (user_credentials, { rejectWithValue }) => {
    try {
      const response = await signup(user_credentials);

      if (response.data.status.code === 200) {
        return {
          data: response.data.status.data,
          authorization: response.header,
        };
      }
    } catch (e) {
      rejectWithValue(`Exception:::${e}`);
    }
  },
);

export const logoutUser = createAsyncThunk(
  'users/logoutUser',
  async (token, { rejectWithValue }) => {
    try {
      const response = await logout({ token });

      if (response.status.code === 200) {
        return {
          data: response.status.data,
        };
      }
      if (response.status.code === 401) {
        throw new Error('Unauthorized');
      }
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    setIdle: (state) => {
      state.status = 'Ready';
    },
    setAppNotReady: (state) => {
      state.status = 'Not Ready';
    },
  },
  extraReducers(builder) {
    builder
      .addCase(signInUser.pending, (state) => {
        state.status = 'Loading';
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.status = 'Ready';
        state.user = action.payload;
      })
      .addCase(signInUser.rejected, (state, action) => {
        // an error occurred. get error action payload
      })
      .addCase(createUser.pending, (state) => {
        state.status = 'Loading';
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.status = 'Ready';
        state.user = action.payload;
      })
      .addCase(createUser.rejected, (state, action) => {
        // an error occurred. get error action payload
        state.status = 'Ready';
        state.user = action.payload;
      })
      .addCase(logoutUser.pending, (state) => {
        state.status = 'Loading';
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.status = 'logoutSuccess';
        state.user = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        // an error occurred. get error action payload
        state.status = 'Ready';
      });
  },
});

export const getUser = (state) => state.user.user;
export const getStatus = (state) => state?.user?.status;
export const getError = (state) => state?.user?.error;

export default userSlice.reducer;
