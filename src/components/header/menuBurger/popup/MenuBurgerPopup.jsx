import { Link } from "react-router-dom";
import pageUrls from "../../../../constants/pageUrls";
import styles from "./MenuBurgerPopup.module.scss";

const MenuBurgerPopup = ({ onClick }) => {
    return (
        <nav className={styles.container}>
            <ul className={styles.ul}>
                <li>
                    <Link className={styles.li} to={pageUrls.about} onClick={onClick}>
                        О ресторане
                    </Link>
                </li>
                <li>
                    <Link className={styles.li} to={pageUrls.delivery} onClick={onClick}>
                        Условия доставки
                    </Link>
                </li>
                <li>
                    <Link className={styles.li} to={pageUrls.return} onClick={onClick}>
                        Возврат товара
                    </Link>
                </li>
                <li>
                    <Link className={styles.li} to={pageUrls.promotion} onClick={onClick}>
                        Акция
                    </Link>
                </li>
            </ul>
        </nav>
    )
};

export default MenuBurgerPopup;
