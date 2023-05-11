import politykaKonfUrl from "../../../assets/documents/PolitykaKonf.pdf";
import soglas from "../../../assets/documents/soglas.pdf";
import styles from "./Links.module.scss";

const Links = () => {
    return (
        <>
            <div className={styles.block_title}>
                © ООО СК «АПШЕРОН» 
                <br/>
                Все права защищены. 2010-2020
            </div>
            <a href={soglas} target="_blank" rel="noreferrer" className={styles.link}>
                Пользовательское соглашение
            </a>
            <a href="/#" className={styles.link}>
                Карта сайта
            </a>
            <a href={politykaKonfUrl} target="_blank" rel="noreferrer" className={styles.link}>
                Политика конфиденциальности
            </a>
        </>
    );
};

export default Links;
