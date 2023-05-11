import styles from "./BannerAbout.module.scss";

const BannerAbout = () => {
    return (
        <div className={styles.container}>
            <div className={styles.block}>
                <div className={styles.title}>
                    НАШЕ КАФЕ
                </div>
                <div className={styles.description}>
                    Мы расположены в одном из самых живописных мест города — на берегу реки, это ваш оазис в черте города, куда можно сбежать от шумного и пыльного мегаполиса. Мы, действительно уникальные, ведь все продумано до мелочей: проект построен из дикого закарпатского сруба, камин в основном зале ресторана и панорамные окна с видом на реку, уютные беседки на берегу реки и лучшая видовая террасса, шатер с посадкой на 200 человек, сказочный детский домик и бассейн.
                </div>
                <button className={styles.button}>
                    ПОСМОТРЕТЬ МЕНЮ
                </button>
            </div>
                
        </div>
    );
};

export default BannerAbout;