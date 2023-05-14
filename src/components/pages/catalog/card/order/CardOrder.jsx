import { useState } from "react";
import { ReactComponent as IconBuy } from "../../../../../assets/images/icon/Buy.svg";
import styles from "./CardOrder.module.scss";

const CardOrder = ({ dataItem }) => {
    const [count, setCount] = useState(0);

    const addToBusket = () => {
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount((value) => value + 1);
        // setCount((value) => value + 1);
        setCount((value) => value + 1);
    };

    const removeFromBusket = () => {
        setCount((value) => value - 1);
    };

    if (count === 0) {
        return (
            <div className={styles.container}>
                <div className={styles.price}>
                    {dataItem.price} ₽
                </div>
                <button className={styles.button} onClick={addToBusket}>
                    <div className={styles.cart}>
                        В Корзину
                    </div>
                    <div className={styles.icon}>
                        <IconBuy />
                    </div>
                </button>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <button className={styles.buttonCount} onClick={removeFromBusket}>
                -
            </button>
            <div className={styles.price}>
                {dataItem.price * count} ₽
            </div>
            <button className={styles.buttonCount} onClick={addToBusket}>
                +
            </button>
            <div className={styles.count} >{count}</div>
        </div>
    );

};

export default CardOrder;
