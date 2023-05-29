import t from "../../assets/translations/translations";
import pageUrls from "../../constants/pageUrls";
import styles from "./Navigation.module.scss";
import { NavLink } from "react-router-dom";

 export const links = [
    { to: pageUrls.catalogColdSnacks, text: t.category["cold-snacks"] },
    { to: pageUrls.catalogHotSnacks, text: "Горячие закуски" },
    { to: pageUrls.meatDishes, text: "Мясные блюда" },
    { to: pageUrls.soups, text: "Супы" },
    { to: pageUrls.fishDishes, text: "Рыбные блюда" },
    { to: pageUrls.grillMenu, text: "Гриль меню" },
    { to: pageUrls.signatureDishes, text: "Фирменные блюда" },
    { to: pageUrls.drinks, text: "Напитки" },
];

const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            {links.map((link) => (
                <NavLink
                    key={link.text}
                    className={({ isActive }) => (!isActive ? styles.item : `${styles.item} ${styles.itemActive}`)}
                    to={link.to}
                >
                    {link.text}
                </NavLink>
            ))}
        </nav>
    );
};

export default Navigation;
