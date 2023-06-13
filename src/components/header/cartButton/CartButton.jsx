import styles from "./CartButton.module.scss";
import pageUrls from "../../../constants/pageUrls";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CartButton = () => {
    const busketCount = useSelector((state) => state.busket.data);

    const count = busketCount.reduce((acc, item) => acc + item.count, 0);

    return (
        <Link to={pageUrls.busket} className={styles.button}>
            <div className={styles.cart}>
                Корзина
            </div>
            <div className={styles.quantity}>
                {count}
            </div>
        </Link>
    );
}

export default CartButton;