import { ReactComponent as IconBuy } from "../../../../../assets/images/icon/Buy.svg";
import styles from "./CardOrder.module.scss";
import { ADD, DECREASE_COUNT, INCREASE_COUNT } from "../../../../../reducers/busketReducer/types";
import Button from "../../../../button/Button";
import t from "../../../../../assets/translations/translations";

const CardOrder = ({ dataItem, dispatch, state, addStyles }) => {

    const addToBusket = () => {
        dispatch({type: ADD, id: dataItem.id });
    };

    const increaseCount = () => {
        dispatch({type: INCREASE_COUNT, id: dataItem.id });
    };

    const decreaseCount = () => {
        dispatch({type: DECREASE_COUNT, id: dataItem.id });
    };

    const busketItem = state.find((item) => item.id === dataItem.id);
    const count = busketItem?.count ?? 0;

    if (count === 0) {
        return (
            <div className={styles.container}>
                <div className={styles.price}>
                    {dataItem.price} ₽
                </div>
                <button className={styles.button} onClick={addToBusket} >
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
            <Button 
                title={t.button.subtraction}
                handleClick={decreaseCount}
                addStyles={styles.buttonCount}
            />
            <div className={styles.price}>
                {dataItem.price * count} ₽
            </div>
            <Button 
                title={t.button.sum}
                handleClick={increaseCount}
                addStyles={styles.buttonCount}
            />
            <div className={`${styles.count} ${addStyles}`} >{count}</div>
        </div>
    );

};

export default CardOrder;
