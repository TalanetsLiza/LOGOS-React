import styles from "./Weather.module.scss";
import { ReactComponent as IconWeather } from "../../../assets/images/icon/weather.svg";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../../../store/weather/weatherSlice";
import { useEffect } from "react";
import Preloader from "../../preloader/Preloader";

const Weather = () => {

    const { weather, status, error } = useSelector((state) => state.weather);
	const dispatch = useDispatch();

	useEffect(() => {
		if (status === "idle") {
			dispatch(getWeather());
		}
	}, [status, dispatch]);

    const render = () => {
        switch(status) {
            case "loading": {
                return (
                    <div className={styles.container}>
						<Preloader />
					</div>
                );
            }
            case "succeed": {
                return (
                    <div className={styles.container}>
                        <IconWeather />
                        <div className={styles.temperature}>
                            {weather.temperature} {weather.units}
                        </div>
                        <div className={styles.temperature}>
                            {weather.city}
                        </div>
                        <div className={styles.temperature}>
                            {weather.time}
                        </div>    
                    </div>
                );
            }
            case "failed": {
				return (
					<div className={styles.container}>
						<div>{error}</div>
					</div>
				);
			}
            default: {
                return <div>Something went wrong...</div>;
            }
        };    
    };
    return render();
};

export default Weather;
