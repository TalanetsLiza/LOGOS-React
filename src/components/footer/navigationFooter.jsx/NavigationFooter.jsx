import { Link } from "react-router-dom";
import styles from "./NavigationFooter.module.scss";
import pageUrls from "../../../constants/pageUrls";

const NavigationFooter = ({isOpen, setOpen}) => {
    return (
        <nav className={[styles.navigation, isOpen ? styles.navigationMenu: " "].join(" ")}>
            <ul className={styles.ul}>
                <li>
                    <Link className={styles.li} to={pageUrls.about} onClick={() => setOpen(!isOpen)}>
                        О ресторане
                    </Link>
                </li>
                <li>
                    <Link className={styles.li} to={pageUrls.delivery} onClick={() => setOpen(!isOpen)}>
                        Условия доставки
                    </Link>
                </li>
                <li>
                    <Link className={styles.li} to={pageUrls.return} onClick={() => setOpen(!isOpen)}>
                        Возврат товара
                    </Link>
                </li>
                <li>
                    <Link className={styles.li} to={pageUrls.promotion} onClick={() => setOpen(!isOpen)}>
                        Акция
                    </Link>
                </li>
            </ul>
        </nav>
    )
};

export default NavigationFooter;