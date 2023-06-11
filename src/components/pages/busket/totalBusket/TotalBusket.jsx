import { Link } from "react-router-dom";
import styles from "./TotalBusket.module.scss";
import pageUrls from "../../../../constants/pageUrls";


const TotalBusket = ({ state, data }) => {
    
    let totalPrice = 0;
    state.forEach((busketItem) => {
        const menuItem = data.find((item) => item.id === busketItem.id);
        const totalItemPrice = menuItem.price * busketItem.count;
        totalPrice += totalItemPrice;
    });

    return (
        <div className={styles.total}>
            <div className={styles.totalBusket}>
                <div>
                    ИТОГО: 
                    <span className={styles.totalPrice}>
                        {totalPrice}
                    </span>
                    ₽
                </div>
                <div className={styles.totalDelivery}>
                    До бесплатной доставки не хватет: 100 ₽
                </div>
                <div className={styles.totalMinPrice}>
                    Минимальная сума заказа 1500 ₽
                </div> 
            </div>
            <Link to={pageUrls.ordering} className={styles.button} >
                Оформить заказ
            </Link>
        </div>
    );
};

export default TotalBusket;