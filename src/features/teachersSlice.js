import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { teachers, createTeacher, getTeacher } from "../services/api";

export const fetchteachers = createAsyncThunk("teachers/getTeachers", async (token, {rejectWithValue}) => {
  try{
    const response = await teachers({token});
    return response;
  }catch(e){

    rejectWithValue("Exception:::", e.getMessage());

  }
});

export const newTeacher = createAsyncThunk("teachers/createTeacher", async ({token, teacher}, {rejectWithValue}) => {
  try{
    
    const response = await createTeacher({token, teacher})
    return response;
    
  }catch(e){
    rejectWithValue("Exception:::"+ e);

  }
});

export const singleTeacher = createAsyncThunk("teachers/getTeacher", async ({token, teacher_id}, {rejectWithValue}) => {
    try{
      
      const response = await getTeacher({token, teacher_id})
      return response;

    }catch(e){
      rejectWithValue("Exception:::"+ e);
  
    }
  });

export const teacherSlice = createSlice({
  name: "teacher",
  initialState: {
    teachers: [],
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
    .addCase(fetchteachers.pending, (state) => {
      state.status = "Loading";
    })
    .addCase(fetchteachers.fulfilled, (state, action) => {
      state.status = "Ready";
      state.teachers = action.payload;
    })
    .addCase(fetchteachers.rejected, (state, action) => {
      //an error occurred. get error action payload
    })
    .addCase(newTeacher.pending, (state) => {
      state.status = "Loading";
    })
    .addCase(newTeacher.fulfilled, (state, action) => {
      state.status = "Ready";
      console.log("SUCCESS::", action.payload);
      state.user = action.payload;
    })
    .addCase(newTeacher.rejected, (state, action) => {
      //an error occurred. get error action payload
      state.status = "Ready";
      console.log("ARE YOU ERROR:::", action.payload);
      state.user = action.payload;
    })
    .addCase(singleTeacher.pending, (state) => {
        state.status = "Loading";
      })
    .addCase(singleTeacher.fulfilled, (state, action) => {
        state.status = "Ready";
        console.log("SUCCESS::", action.payload);
        state.user = action.payload;
    })
    .addCase(singleTeacher.rejected, (state, action) => {
        //an error occurred. get error action payload
        state.status = "Ready";
        console.log("ARE YOU ERROR:::", action.payload);
        state.user = action.payload;
    });
  }
});

export const getTeacherList = (state) => state.teacher.teachers
export const getStatus = (state) => state?.teacher?.status
export const getError = (state) => state?.teacher?.error

export default teacherSlice.reducer;