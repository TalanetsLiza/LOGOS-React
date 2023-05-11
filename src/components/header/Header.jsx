import styles from "./Header.module.scss";
import Logo from "../logo/Logo";
import Search from "./search/Search";
import Contacts from "./contacts/Contacts";
import CartButton from "./cartButton/CartButton";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Logo />
            </div>
            <Search />
            <Contacts />
            <div className={styles.button}>
                <CartButton />
            </div>
        </header>
    );
}

export default Header;
