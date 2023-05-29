import { useParams } from "react-router-dom";
import styles from "./ProductPage.module.scss";

const ProductPage = () => {
    const { id } = useParams();
    return (
        <div className={styles.container}>
            карточка товара {id}
        </div>
    );
};

export default ProductPage;
