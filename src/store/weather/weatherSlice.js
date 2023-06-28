import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const getGeolocation = () => {
    return new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject));
};

const getFetch = async(latitude, longitude) => {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`);
    return response.json();
}

export const getWeather = createAsyncThunk("weather/getWeather",
    async () => {
        try {
            const position = await getGeolocation();
            const {latitude, longitude} = position.coords;
            return getFetch(latitude, longitude); 
        }
        catch (error){
            return getFetch(52.22, 13.42);
        }
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
