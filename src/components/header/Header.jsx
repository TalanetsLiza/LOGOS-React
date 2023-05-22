import styles from "./Header.module.scss";
import Logo from "../logo/Logo";
import Search from "./search/Search";
import Contacts from "./contacts/Contacts";
import CartButton from "./cartButton/CartButton";
import MenuBurger from "./menuBurger/MenuBurger";

const Header = ({ busketState }) => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.menuMob}>
                    <MenuBurger />
                </div>            
                <div className={styles.logo}>
                    <Logo />
                </div>
                <div className={styles.search}>
                       <Search />
                </div>
                    <Contacts />
                <div className={styles.button}>
                    <CartButton busketState={busketState} />
                </div>
            </div>
        </header>
    );
}

export default Header;
