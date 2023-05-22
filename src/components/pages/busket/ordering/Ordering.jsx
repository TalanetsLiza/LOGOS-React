import t from "../../../../assets/translations/translations";
import styles from "./Ordering.module.scss";
import { ReactComponent as BackIcon } from "../../../../assets/images/icon/back.svg";
import OrderingForm from "./form/OrderingForm";

const Ordering = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.back}>
                    <BackIcon />
                    <span className={styles.back__title}>к выбору блюда</span>              
                </div>
                <h2 className={styles.title}>
                   {t.ordering.name}
                </h2>
            </div>
            <div className={styles.form}>
                <OrderingForm />
            </div>
        </div>
    );
};

export default Ordering;