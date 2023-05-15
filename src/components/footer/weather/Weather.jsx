import styles from "./Weather.module.scss";
import { ReactComponent as IconWeather } from "../../../assets/images/icon/weather.svg";

const Weather = ({ weather }) => {
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
};

export default Weather;
