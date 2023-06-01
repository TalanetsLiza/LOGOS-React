import t from "../../../../assets/translations/translations";
import styles from "./Ordering.module.scss";
import { ReactComponent as BackIcon } from "../../../../assets/images/icon/back.svg";
import OrderingForm from "./form/OrderingForm";
import pageUrls from "../../../../constants/pageUrls";
import { Link } from "react-router-dom";

const Ordering = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Link className={styles.back} to={pageUrls.busket}>
                    <BackIcon />
                    <span className={styles.back__title}>{t.back.name1}</span>              
                </Link>
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