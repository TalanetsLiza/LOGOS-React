import styles from "./Header.module.scss";
import Cart from "./cart/Cart";
import Logo from "./logo/Logo";
import Search from "./search/Search";
import Contacts from "./contacts/Contacts";

const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <Search />
            <Contacts />
            <Cart />
        </header>
    );
}

export default Header;
