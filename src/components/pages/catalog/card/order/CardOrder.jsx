import { ReactComponent as IconBuy } from "../../../../../assets/images/icon/Buy.svg";
import styles from "./CardOrder.module.scss";
import Button from "../../../../button/Button";
import t from "../../../../../assets/translations/translations";
import { useDispatch, useSelector } from "react-redux";
import busketActionCreators from "../../../../../store/busketReducer/busketActionCreators";
import busketSelectors from "../../../../../store/busketReducer/busketSelectors";

const CardOrder = ({ dataItem, addStyles }) => {
    // console.log("render");

    // const busketCountSelector = useMemo(() => busketSelectors.getCount(dataItem.id), [dataItem.id]);
    // const count = useSelector(busketCountSelector);
    const count = useSelector(busketSelectors.getCount(dataItem.id));
    const dispatch = useDispatch();

    const addToBusket = () => {
        dispatch(busketActionCreators.add(dataItem.id));
    };

    const increaseCount = () => {
        dispatch(busketActionCreators.increaseCount(dataItem.id));
    };

    const decreaseCount = () => {
        dispatch(busketActionCreators.decreaseCount(dataItem.id));
    };

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
