import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMenu = createAsyncThunk(
    "menu/fetchMenu",
    async () => {
        const responce = await fetch("http://localhost:3001/menu");
        return await responce.json();
    },
);

const initialState = {
    data: [],
    status: "",
    error: null,
};

const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchMenu.pending, (state) => {
            state.status = "loading"
        });
        builder.addCase(fetchMenu.fulfilled, (state, action) => {
			state.status = "succeed";
			state.data = action.payload;
		});
		builder.addCase(fetchMenu.rejected, (state, action) => {
			state.status = "failed";
			state.error = action.error.message;
		});
    }
});

export default menuSlice.reducer;
