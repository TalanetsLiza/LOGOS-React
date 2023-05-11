import { Link } from "react-router-dom";
import styles from "./NavigationFooter.module.scss";
import pageUrls from "../../../constants/pageUrls";

const NavigationFooter = () => {
    return (
        <nav className={styles.navigation}>
            <ul className={styles.ul}>
                <li>
                    <Link className={styles.li}  state="true" to={pageUrls.about}>
                        О ресторане
                    </Link>
                </li>
                <li>
                    <Link className={styles.li} to={pageUrls.delivery}>
                        Условия доставки
                    </Link>
                </li>
                <li>
                    <Link className={styles.li} to={pageUrls.return}>
                        Возврат товара
                    </Link>
                </li>
                <li>
                    <Link className={styles.li} to={pageUrls.promotion}>
                        Акция
                    </Link>
                </li>
            </ul>
        </nav>
    )
};

export default NavigationFooter;