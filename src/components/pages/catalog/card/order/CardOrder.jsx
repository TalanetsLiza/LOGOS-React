import { ReactComponent as IconBuy } from "../../../../../assets/images/icon/Buy.svg";
import styles from "./CardOrder.module.scss";
import { ADD, DECREASE_COUNT, INCREASE_COUNT } from "../../../../../reducers/busketReducer/types";

const CardOrder = ({ dataItem, dispatch, state }) => {

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
            <button className={styles.buttonCount} onClick={decreaseCount}>
                -
            </button>
            <div className={styles.price}>
                {dataItem.price * count} ₽
            </div>
            <button className={styles.buttonCount} onClick={increaseCount}>
                +
            </button>
            <div className={styles.count} >{count}</div>
        </div>
    );

};

export default CardOrder;
