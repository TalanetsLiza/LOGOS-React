import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getWeather = createAsyncThunk("weather/getWeather",
    async () => {
        const responce = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m");
        return await responce.json();
    }
);

const initialState = {
    weather: {},
    status: "idle",
    error: null,
};

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getWeather.pending, (state, action) => {
            state.status = "loading"
        });
        builder.addCase(getWeather.fulfilled, (state, action) => {
			const dataWeather = {
				city: "Warszawa",
                temperature: action.payload.current_weather.temperature,
                units: action.payload.hourly_units.temperature_2m,
                time: action.payload.current_weather.time,
			};
			state.status = "succeed";
			state.weather = dataWeather;
		});
		builder.addCase(getWeather.rejected, (state, action) => {
			state.status = "failed";
			state.error = action.error.message;
		});
    }
});

export default weatherSlice.reducer;
