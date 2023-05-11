import { Link } from "react-router-dom";
import styles from "./Logo.module.scss";

const Logo = () => {
    return (
        <Link className={styles.logo}>
            LOGOS
        </Link>
    );
}

export default Logo;