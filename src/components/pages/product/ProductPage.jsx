import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReactComponent as BackIcon } from "../../../assets/images/icon/back.svg";
import styles from "./ProductPage.module.scss";
import CardOrder from "../catalog/card/order/CardOrder";
import ProductTable from "./productTable/ProductTable";
import t from "../../../assets/translations/translations";


const ProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const menuData = useSelector((state) => state.menu.data);

    const back = () => {
        navigate(-1);
    };
    
    const dataItem = menuData.find((data) => data.id === +id);
    if (!dataItem) {
        return null;
    }

    return (
        <div className={styles.container}>
            <div className={styles.header} onClick={back}>
                <BackIcon className={styles.icon} />
                <span className={styles.back__title}>{t.back.name}</span>              
            </div>
            <div className={styles.product}>
                <img 
                    src={dataItem.image.src}
                    alt={dataItem.image.alt}
                    className={styles.image}
                />
                <div className={styles.product__info}>
                    <div className={styles.title}>
                        {dataItem.title}
                    </div>
                    <div className={styles.description}>
                        {dataItem.description}
                    </div>
                    <div className={styles.weight}>
                        Вес: {dataItem.weight} г.
                    </div>
                    <CardOrder
                        dataItem={dataItem}
                        addStyles={styles.count}
                    />
                    <ProductTable dataItem={dataItem} />
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
