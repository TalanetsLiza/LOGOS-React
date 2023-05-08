import styles from "./Contacts.module.scss";
import { ReactComponent as CallingIcon } from "../../../assets/images/icon/calling.svg";

const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <div className={styles.icon}>
                <CallingIcon />
            </div>
            <div className={styles.information}>
                <div className={styles.title}>
                    Контакты:
                </div>
                <a className={styles.phone} href="tel:+79175105759">+7 (917) 510-57-59</a>
            </div>
        </div>
    );
}

export default Contacts;