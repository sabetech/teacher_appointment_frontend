import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getTeacherList = createAsyncThunk('teachers/fetchTeachers', async (token, { rejectWithValue } ) => {

});