import { Link } from "react-router-dom";
import styles from "./Card.module.scss";
import CardOrder from "./order/CardOrder";
import pageUrls from "../../../../constants/pageUrls";

const Card = ({ dataItem, dispatch, state }) => {
    // const [state, dispatch] = useReducer(busketReducer, busketInitialState);

    return (
        <div className={styles.card}>
            <Link to={`${pageUrls.product}/${dataItem.id}`}>
                <img 
                    src={dataItem.image.src}
                    alt={dataItem.image.alt}
                    className={styles.image}
                />
            </Link>
            <div className={styles.container}>
                <div className={styles.block}>
                    <div className={styles.title}>
                        {dataItem.title}
                    </div>
                    <div className={styles.weight}>
                        Вес: {dataItem.weight} г.
                    </div>
                </div>
                <div className={styles.description}>
                    {dataItem.description}
                </div>
                <CardOrder 
                    state={state} 
                    dispatch={dispatch} 
                    dataItem={dataItem}
                 />
            </div>
        </div>
    );
};

export default Card;