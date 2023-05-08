import styles from "./Banner.module.scss";

const Banner = () => {
    return (
        <section className={styles.banner}>
            <div className={styles.content}>
                <div className={styles.title}>
                    Доставка ВКУСНЕЙШИХ
                    <br />
                    БЛЮд за 60 минут
                    
                    <div className={styles.titleShadow}>
                        Доставка ВКУСНЕЙШИХ
                        <br />
                        БЛЮд за 60 минут
                    </div>
                </div>
                <div className={styles.title2}>
                    Ещё не пробовал?
                </div>
            </div>
        </section>
    );
}

export default Banner;