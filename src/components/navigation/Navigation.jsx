import styles from "./Navigation.module.scss";
import { Link } from "react-router-dom";

const links = [
    { to: "/", text: "Холодные закуски" },
    { to: "/", text: "Горячие закуски" },
    { to: "/", text: "Мясные блюда" },
    { to: "/", text: "Супы" },
    { to: "/", text: "Рыбные блюда" },
    { to: "/", text: "Гриль меню" },
    { to: "/", text: "Фирменные блюда" },
    { to: "/", text: "Напитки" },
];

const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            {links.map((link) => (
                <Link key={link.text} className={styles.item} to={link.to}>
                    {link.text}
                </Link>
            ))}
        </nav>
    );
};

export default Navigation;
