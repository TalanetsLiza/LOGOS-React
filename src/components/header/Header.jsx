import styles from "./Header.module.scss";
import Logo from "../logo/Logo";
import Search from "./search/Search";
import Contacts from "./contacts/Contacts";
import CartButton from "./cartButton/CartButton";
import MenuBerger from "./menuBerger/MenuBerger";

const Header = ({isOpen, setOpen}) => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.menuMob}>
                    <MenuBerger isOpen={isOpen} setOpen={setOpen} />
                </div>            
                <div className={styles.logo}>
                    <Logo />
                </div>
                <div className={styles.search}>
                       <Search />
                </div>
                    <Contacts />
                <div className={styles.button}>
                    <CartButton />
                </div>
            </div>
        </header>
    );
}

export default Header;
