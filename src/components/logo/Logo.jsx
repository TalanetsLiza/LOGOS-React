import { Link } from "react-router-dom";
import styles from "./Logo.module.scss";
import pageUrls from "../../constants/pageUrls";

const Logo = () => {
    return (
        <Link className={styles.logo} to={pageUrls.catalogColdSnacks}>
            LOGOS
        </Link>
    );
}

export default Logo;