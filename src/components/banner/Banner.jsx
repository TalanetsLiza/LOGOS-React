import t from "../../assets/translations/translations";
import styles from "./Banner.module.scss";

const Banner = () => {
    return (
        <section className={styles.banner}>
            <div className={styles.content}>
                <div className={styles.title}>
                    {t.banner.title1}
                    <br />
                    {t.banner.title2}
                    
                    <div className={styles.titleShadow}>
                        {t.banner.title1}
                        <br />
                        {t.banner.title2}
                    </div>
                </div>
                <div className={styles.title2}>
                    {t.banner.description}
                </div>
            </div>
        </section>
    );
}

export default Banner;