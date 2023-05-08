import styles from "./Cart.module.scss";

const Cart = () => {
    return (
        <button className={styles.button}>
            <div className={styles.cart}>
                Корзина
            </div>
            <div className={styles.quantity}>
                4
            </div>
        </button>
    );
}

export default Cart;