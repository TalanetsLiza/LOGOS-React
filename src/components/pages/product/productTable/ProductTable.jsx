import styles from "./ProductTable.module.scss";

const ProductTable = ({ dataItem }) => {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Белки</th>
                    <th>Жиры</th>
                    <th>Углеводы</th>
                    <th>Ккал</th>
                    <th>Вес</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{dataItem.proteins}</td>
                    <td>{dataItem.fats}</td>
                    <td>{dataItem.carbohydrates}</td>
                    <td>{dataItem.kilocalories}</td>
                    <td>{dataItem.weight} г.</td>
                </tr>
            </tbody>
        </table>
    )
};

export default ProductTable;
