import styles from "./Footer.module.scss";
import { ReactComponent as ExpandLessIcon } from "../../assets/images/icon/expandLess.svg";
import Logo from "../logo/Logo";
import Links from "./links/Links";
import NavigationFooter from "./navigationFooter.jsx/NavigationFooter";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <a className={styles.button} href="/#">
                    <ExpandLessIcon />
                </a>
                <div className={styles.block}>
                    <Logo />
                    <Links />                    
                </div>
                <NavigationFooter />
            </div>
        </footer>
    )
};

export default Footer;
