import styles from "./MenuBerger.module.scss";
import { ReactComponent as Burger } from "../../../assets/images/icon/Burger.svg";


const MenuBerger = ({isOpen, setOpen}) => {

    return (
        <div className={styles.menu} onClick={() => setOpen(!isOpen)}>
            <Burger className={styles.burger} />
            <Burger className={styles.burger} />
            <Burger />
            <div className={styles.title}>
                МЕНЮ
            </div>
        </div>
    );
}

export default MenuBerger;