import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchCourses = createAsyncThunk(
    'course/fetchCourses',
    async () => {
        const res = await fetch('http://localhost:3030/courses')
            .then(res => res.json());
        return res.data;
    }
)

const courseSlice = createSlice({
    name: 'course',
    initialState: {
        discover: [],
        bookingList: [],
        status: 'idle'
    },
    reducers: {
        addToBookingList: (state, { payload }) => {
            state.bookingList.push(payload)
        },
        removeFormBookingList: (state, { payload }) => {
            state.bookingList = state.bookingList.filter(booking => booking._id !== payload._id);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCourses.fulfilled, (state, action) => {
            state.discover = action.payload;
            state.status = 'success'
        })
        builder.addCase(fetchCourses.pending, (state, action) => {
            state.status = 'pending';
        })
    },
});

export const { addToBookingList, removeFormBookingList } = courseSlice.actions;

export default courseSlice.reducer;
