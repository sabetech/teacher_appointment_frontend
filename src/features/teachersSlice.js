import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  teachers,
  createTeacher,
  getTeacher,
  removeTeacher,
} from '../services/api';

export const fetchteachers = createAsyncThunk(
  'teachers/getTeachers',
  async (token, { rejectWithValue }) => {
    try {
      const response = await teachers({ token });
      return response;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export const newTeacher = createAsyncThunk(
  'teachers/createTeacher',
  async ({ token, teacher }, { rejectWithValue }) => {
    try {
      const response = await createTeacher({ token, teacher });
      return response;
    } catch (e) {
      rejectWithValue(`Exception:::${e}`);
    }
  },
);

export const singleTeacher = createAsyncThunk(
  'teachers/getTeacher',
  async ({ token, teacher_id }, { rejectWithValue }) => {
    try {
      const response = await getTeacher({ token, teacher_id });

      return response;
    } catch (e) {
      rejectWithValue(e.message());
    }
  },
);

export const deleteTeacher = createAsyncThunk(
  'teachers/deleteTeacher',
  async ({ token, teacherId }, { rejectWithValue }) => {
    try {
      const response = await removeTeacher({ token, teacherId });

      return { data: response, removedId: teacherId };
    } catch (e) {
      rejectWithValue(`Exception:::${e}`);
    }
  },
);

export const teacherSlice = createSlice({
  name: 'teacher',
  initialState: {
    teachers: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    setIdle: (state) => {
      state.status = 'idle';
    },
    setAppNotReady: (state) => {
      state.status = 'Not Ready';
    },
    clearStore: (state) => {
      state.teachers = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchteachers.pending, (state) => {
        state.status = 'Loading';
      })
      .addCase(fetchteachers.fulfilled, (state, action) => {
        state.status = 'TeacherSuccess';
        state.teachers = action.payload;
      })
      .addCase(fetchteachers.rejected, (state, action) => {
        // an error occurred. get error action payload
        state.status = action.payload;
      })
      .addCase(newTeacher.pending, (state) => {
        state.status = 'Loading';
      })
      .addCase(newTeacher.fulfilled, (state, action) => {
        state.status = 'newTeacherSuccess';
      })
      .addCase(newTeacher.rejected, (state, action) => {
        // an error occurred. get error action payload
        state.status = 'newTeacherFailed';
      })
      .addCase(singleTeacher.pending, (state) => {
        state.status = 'Loading';
      })
      .addCase(singleTeacher.fulfilled, (state, action) => {
        state.status = 'SingleTeacherSuccess';
      })
      .addCase(singleTeacher.rejected, (state, action) => {
        // an error occurred. get error action payload
        state.status = 'SingleTeacherFailed';
      })
      .addCase(deleteTeacher.pending, (state) => {
        state.status = 'Loading';
      })
      .addCase(deleteTeacher.fulfilled, (state, action) => {
        state.status = 'DeleteSuccess';
        state.teachers = state.teachers.filter(
          (teacher) => teacher.id !== action.payload.removedId,
        );
      })
      .addCase(deleteTeacher.rejected, (state, action) => {
        state.status = 'DeleteFailed';
      });
  },
});

export const getTeacherList = (state) => state?.teacher?.teachers;
export const getStatus = (state) => state?.teacher?.status;
export const getError = (state) => state?.teacher?.error;

export const { setIdle, clearStore } = teacherSlice.actions;
export default teacherSlice.reducer;
