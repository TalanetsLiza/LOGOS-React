import styles from "./CartButton.module.scss";
import pageUrls from "../../../constants/pageUrls";
import { Link } from "react-router-dom";

const CartButton = ({ busketState }) => {
    // let count = 0;
    // busketState.forEach((element) => {
    //     count = count + element.count;
    // });

    const count = busketState.reduce((acc, item) => acc + item.count, 0);

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