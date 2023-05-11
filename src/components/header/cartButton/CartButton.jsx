import styles from "./CartButton.module.scss";
import pageUrls from "../../../constants/pageUrls";
import { Link } from "react-router-dom";

const CartButton = () => {
    return (
        <Link to={pageUrls.busket} className={styles.button}>
            <div className={styles.cart}>
                Корзина
            </div>
            <div className={styles.quantity}>
                4
            </div>
        </Link>
    );
}

export default CartButton;