import { ReactComponent as LocationIcon } from "../../../assets/images/icon/location.svg";
import { ReactComponent as SearchIcon } from "../../../assets/images/icon/search.svg";
import styles from "./Search.module.scss";

const Search = () => {
    return (
        <form className={styles.form}>
            <LocationIcon className={styles.locationIcon} />
            <input className={styles.input} placeholder="Введите адрес доставки" type="text"></input>
            <button className={styles.button}>
                <SearchIcon className={styles.search} />

            </button>
        </form>
    );
}

export default Search;