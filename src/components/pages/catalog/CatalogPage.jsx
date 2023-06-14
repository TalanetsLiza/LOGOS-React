import { useParams } from "react-router-dom";
import styles from "./CatalogPages.module.scss";
import Card from "./card/Card";
import t from "../../../assets/translations/translations";
import BannerAbout from "../../bannerAbout/BannerAbout";
import BannerContact from "../../bannerContact/BannerContact";
import { useSelector } from "react-redux";


const CatalogPage = () => {
    const menuData = useSelector((state) => state.menu.data);
    const { category } = useParams();

    const data = menuData.filter((menuItem) => menuItem.category.includes(category));

    return (
       <>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    {t.category[category]}
                </h2>
                <div className={styles.container__cards}>
                    {data.map((dataItem) => (
                        <Card key={dataItem.id} dataItem={dataItem} />
                    ))}
                </div>
            </div>
            <BannerAbout />
            <BannerContact />
       </>
    );
};

export default CatalogPage;
