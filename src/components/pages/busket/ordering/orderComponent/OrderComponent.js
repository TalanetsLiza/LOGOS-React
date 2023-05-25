import styles from "../form/OrderingForm.module.scss";

const OrderComponent = ({ children, title }) => {
    return (
        <div className={styles.card}>
            <div className={styles.header}> 
                {title}
            </div>
            {children}
        </div>
    );
};

export default OrderComponent;
