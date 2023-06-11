import t from "../../../../assets/translations/translations";
import { DECREASE_COUNT, DELETE_COUNT, INCREASE_COUNT } from "../../../../reducers/busketReducer/types";
import Button from "../../../button/Button";
import styles from "./CardBusket.module.scss";

const CardBusket = ({ dataItem, state, dispatch }) => {

    const busketItem = state.find((item) => item.id === dataItem.id);
    const count = busketItem?.count ?? 0;

    const increaseCount = () => {
        dispatch({type: INCREASE_COUNT, id: dataItem.id });
    };

    const decreaseCount = () => {
        dispatch({type: DECREASE_COUNT, id: dataItem.id });
    };

    const deleteCount = () => {
        dispatch({type: DELETE_COUNT, id: dataItem.id });
    };

    return (
        <div className={styles.container}>
            <img 
                src={dataItem.image.src}
                alt={dataItem.image.alt}
                className={styles.image}
            />
            <div className={styles.block}>
                <div className={styles.title}>
                    {dataItem.title}
                </div>
                <div className={styles.description}>
                    {dataItem.description}
                </div>
            </div>
            <div className={styles.blockCount}>
                <Button 
                    title={t.button.subtraction}
                    handleClick={decreaseCount}
                    addStyles={styles.buttonCount}
                />
                <div className={styles.count}>
                    {count}
                </div>
                <Button 
                    title={t.button.sum}
                    handleClick={increaseCount}
                    addStyles={styles.buttonCount}
                />
            </div>
            <div className={styles.price}>
                {dataItem.price * count} ₽
            </div>
            <Button 
                title={t.button.close}
                handleClick={deleteCount}
                addStyles={styles.buttonClose}
            />
        </div>
    )
};

export default CardBusket;