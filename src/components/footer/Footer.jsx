import styles from "./Footer.module.scss";
import { ReactComponent as ExpandLessIcon } from "../../assets/images/icon/expandLess.svg";
import Logo from "../logo/Logo";
import Links from "./links/Links";
import NavigationFooter from "./navigationFooter.jsx/NavigationFooter";
import Weather from "./weather/Weather";

const Footer = ({ weather }) => {
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
                <Weather weather={weather}/>
            </div>
        </footer>
    );
};

export default Footer;
