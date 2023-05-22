import t from "../../../assets/translations/translations";
import styles from "./BusketPage.module.scss";
import { ReactComponent as BackIcon } from "../../../assets/images/icon/back.svg";
import pageUrls from "../../../constants/pageUrls";
import { Link } from "react-router-dom";


const BusketPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.back}>
                    <BackIcon />
                    <span className={styles.back__title}>к выбору блюда</span>              
                </div>
                <h2 className={styles.title}>
                   {t.busketPage.name}
                </h2>
            </div>
            <div className={styles.productsBusket}>

            </div>
            <div className={styles.otherProducts}>

            </div>
            <div className={styles.total}>
                <div className={styles.totalBusket}>
                    <div className={styles.totalPrice}>
                        ИТОГО:
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
        
        </div>
    );
};

export default BusketPage;
