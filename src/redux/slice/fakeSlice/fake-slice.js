import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { requestTodoList } from './service';

const initialState = {
	loading: false,
	data: null,
	error: null
};

export const todoList = createAsyncThunk('todoList', async (data, { rejectWithValue }) => await requestTodoList({ data, rejectWithValue }));

export const fakeSlice = createSlice({
	name: 'fake',
	initialState,
	reducers: {},
	extraReducers: {
		[todoList.pending]: state => {
			state.loading = true;
		},
		[todoList.fulfilled]: (state, action) => {
			state.loading = false;
			state.data = action.payload;
		},
		[todoList.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		}
	}
});

export default fakeSlice.reducer;
