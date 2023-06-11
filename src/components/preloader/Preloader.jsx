import preloader from "../../assets/images/icon/loader-icon.svg";
import styles from "./Preloader.module.scss";

const Preloader = () => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={preloader} alt="preloader"/>
        </div>
    )
};
export default Preloader;