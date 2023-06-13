import t from "../../../../assets/translations/translations";
import Button from "../../../button/Button";
import styles from "./CardBusket.module.scss";
import busketSelectors from "../../../../store/busketReducer/busketSelectors";
import { useDispatch, useSelector } from "react-redux";
import busketActionCreators from "../../../../store/busketReducer/busketActionCreators";

const CardBusket = ({ dataItem }) => {

    const count = useSelector(busketSelectors.getCount(dataItem.id));
    const dispatch = useDispatch();

    const increaseCount = () => {
        dispatch(busketActionCreators.increaseCount(dataItem.id));
    };

    const decreaseCount = () => {
        dispatch(busketActionCreators.decreaseCount(dataItem.id));
    };

    const deleteCount = () => {
        dispatch(busketActionCreators.deleteCount(dataItem.id));
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