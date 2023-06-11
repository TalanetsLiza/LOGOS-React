import { useParams } from "react-router-dom";
import styles from "./CatalogPages.module.scss";
import menuData from "../../../data/menuData";
import Card from "./card/Card";
import t from "../../../assets/translations/translations";
import BannerAbout from "../../bannerAbout/BannerAbout";
import BannerContact from "../../bannerContact/BannerContact";


const CatalogPage = ({dispatch, state}) => {
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
                        <Card key={dataItem.id} dataItem={dataItem} state={state} dispatch={dispatch} />
                    ))}
                </div>
            </div>
            <BannerAbout />
            <BannerContact />
       </>
    );
};

export default CatalogPage;
