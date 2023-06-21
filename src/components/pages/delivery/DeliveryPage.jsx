import t from "../../../assets/translations/translations";
import Accordion from "./Accordion/Accordion";
import styles from "./DeliveryPage.module.scss";
import map from "../../../assets/images/banner/map.png";

const DeliveryPage = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                {t.deliveryPage.name}
            </h2>
            <div className={styles.blockAccordion}>
                <div className={styles.accordion}>
                    <Accordion />
                </div>
                <img className={styles.map} src={map} alt="imageMap" />
            </div>
            <div className={styles.blockSchedule}>
                <div className={styles.section}>
                    <span className={styles.section_title}>
                        График работы доставки:
                    </span>
                    <span className={styles.section_time}>
                        с 10:00-21:00
                    </span>
                </div>
                <div className={styles.section}>
                    <span className={styles.section_title}>
                        График работы кафе:
                    </span>
                    <span className={styles.section_time}>
                        с 8:00-21:00
                    </span>
                </div>
            </div>
            <div className={styles.section}>
                <span className={styles.section_title}>
                    Минимальный заказ:
                </span>
                <span className={styles.section_description}>
                    Бесплатная доставка пешим курьером при сумме заказа от 400 ₽
                    Доставка оператором такси от любой суммы заказа - по тарифам 
                    перевозчика.
                </span>
            </div>
        </div>
    );
};

export default DeliveryPage;
