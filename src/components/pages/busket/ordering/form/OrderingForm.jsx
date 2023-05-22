import { useState } from "react";
import styles from "./OrderingForm.module.scss";

const OrderingForm = () => {
    const [values, setValues] = useState({
        name: "",
        phone: "",
        street: "",
        flat: "",
        entrance: "",
        comment: "",
        delivery: "delivery",
    });

    const handleChange = (event) => {
        const newValues = {...values};
        newValues[event.target.name] = event.target.value;
        setValues(newValues);
    };

    // console.log(values);

    return (
        <form>
            <div className={styles.card}>
                <div className={styles.header}> 
                    1. Контактная информация
                </div>
                <div className={styles.fields}>
                    <input
                        className={`${styles.textField} ${styles.xs_6}`}
                        type="text"
                        placeholder="Имя*"
                        name="name"
                        onChange={handleChange}
                        value={values.name}
                    />
                    <input
                        className={`${styles.textField} ${styles.xs_6}`}
                        type="text"
                        placeholder="Телефон*"
                        name="phone"
                        onChange={handleChange}
                        value={values.phone}
                    />

                    {/* {[
                        { name: "name", placeholder: "Имя*" },
                        { name: "phone", placeholder: "Телефон*" },
                    ].map((config) => (
                        <input
                            key={config.name}
                            className={`${styles.textField} ${styles.xs_4}`}
                            type="text"
                            onChange={handleChange}
                            value={values[config.name]}
                            {...config}
                        />
                    ))} */}
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.header}> 
                    2. Доставка
                </div>
                <div className={styles.fields}>
                    <div className={`${styles.buttonField} ${styles.xs_8}`}>
                        {[
                            { value: "delivery", text: "Доставка" },
                            { value: "pickup", text: "Самовывоз" },
                        ].map(({ value, text }) => (
                            <button
                                key={value}
                                className={
                                    `${styles.button} `
                                    + `${values.delivery === value ? styles.activeButton :""} `
                                }
                                type="button"
                                value={value}
                                name="delivery"
                                onClick={handleChange}
                            >
                                {text}
                            </button>
                        ))}
                    </div>
                    {values.delivery === "delivery" && (
                        <div className={styles.xs_6}>
                            Доставим через  1 час 30 минут
                        </div>
                    )}
                </div>
                <div className={styles.buttonField}>
                    Адрес доставки
                </div>
                <div className={styles.fields}>
                    <input
                        className={`${styles.textField} ${styles.xs_8}`}
                        type="text"
                        placeholder="Укажите улицу*"
                        name="street"
                        onChange={handleChange}
                        value={values.street}
                    />
                    <input
                        className={`${styles.textField} ${styles.xs_4}`}
                        type="text"
                        placeholder="Номер дома*"
                        name="house"
                        onChange={handleChange}
                        value={values.house}
                    />
                </div>
                <div className={styles.fields}>
                    <input
                        className={`${styles.textField} ${styles.xs_4}`}
                        type="text"
                        placeholder="№ квартиры/офиса"
                        name="flat"
                        onChange={handleChange}
                        value={values.flat}
                    />
                    <input
                        className={`${styles.textField} ${styles.xs_4}`}
                        type="text"
                        placeholder="Подъезд"
                        name="entrance"
                        onChange={handleChange}
                        value={values.entrance}
                    />
                    <input
                        className={`${styles.textField} ${styles.xs_4}`}
                        type="text"
                        placeholder="Телефон*"
                        name="phone"
                        onChange={handleChange}
                        value={values.phone}
                    />
                </div>
                <div className={styles.fields}>
                    <input
                        className={`${styles.textField} ${styles.xs_12}`}
                        type="text"
                        placeholder="Комментарий"
                        name="comment"
                        onChange={handleChange}
                        value={values.name}
                    />
                </div>
            </div>
        </form>
    );
};

export default OrderingForm;