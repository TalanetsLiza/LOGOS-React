import t from "../../../assets/translations/translations";
import styles from "./BusketPage.module.scss";
import { ReactComponent as BackIcon } from "../../../assets/images/icon/back.svg";
import pageUrls from "../../../constants/pageUrls";
import { Link } from "react-router-dom";
import TotalBusket from "./totalBusket/TotalBusket";
import menuData from "../../../data/menuData";
import CardBusket from "./cardBusket/CardBusket";


const BusketPage = ({ state, dispatch }) => {

    const data = state.map((busketItem) => (
        menuData.find((item) => item.id === busketItem.id)
    ));   
    
    if(data.length === 0) {
        return (
            <>
                <div className={styles.header}>
                    <Link className={styles.back} to={pageUrls.catalogColdSnacks}>
                        <BackIcon />
                        <span className={styles.back__title}>{t.back.name2}</span>              
                    </Link>
                </div>
                <div className={styles.busketZero}>
                    Корзина пуста
                </div>
            </>
        )
    };
    
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Link className={styles.back} to={pageUrls.catalogColdSnacks}>
                    <BackIcon />
                    <span className={styles.back__title}>{t.back.name2}</span>              
                </Link>
                <h2 className={styles.title}>
                {t.busketPage.name}
                </h2>
            </div>
            <div className={styles.productsBusket}>
                {data.map((dataItem) => (
                    <CardBusket key={dataItem.id} dataItem={dataItem} state={state} dispatch={dispatch} />
                ))}
            </div>
            <TotalBusket state={state} data={data} />
        </div>
    );
};

export default BusketPage;
