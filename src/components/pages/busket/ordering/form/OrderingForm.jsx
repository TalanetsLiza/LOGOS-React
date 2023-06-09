import { useState } from "react";
import { ReactComponent as TimegIcon } from "../../../../../assets/images/icon/time.svg";
import styles from "./OrderingForm.module.scss";
import OrderComponent from "../orderComponent/OrderComponent";
import useValidation from "../../../../validation/useValidation";

const defaultState = {
    name: "",
    phone: "",
    street: "",
    flat: "",
    entrance: "",
    comment: "",
    delivery: "delivery",
    cash: "cash",
    timeDelivery: "soon",
    phoneDelivery: "",
    toTime: "",
    person: "1",
    callback: "noCall",
    agreement: false,
};

const OrderingForm = () => {
    const [values, setValues] = useState(defaultState);
    const { errors, validate, errorsRef } = useValidation();

    const handleChange = (event) => {
        const newValues = {...values};
        const name = event.target.name;
        const value = event.target.value;
        
        newValues[name] = value;
        
        validate(name, value);
        
        setValues(newValues);
    };

    const handleChangeCheckbox = (event) => {
        const newValues = {...values};
        newValues[event.target.name] = event.target.checked;
        setValues(newValues);
    };

    const handelSubmit = (event) => {
        event.preventDefault();
        Object.entries(values).forEach(([name, value]) => validate(name, value));
        setTimeout(() => {
            console.log(errors, errorsRef.current);
            const hasErorr = Object.values(errorsRef.current).some((text) => !!text);
            if (hasErorr) {
                const form = document.getElementById("ordering-form");
                form?.scrollIntoView();
                return;
            }
            alert("Submitted");
        }, 10);
    };

    console.log(values);

    return (
        <form onSubmit={handelSubmit} id="ordering-form">
            <OrderComponent title="1. Контактная информация">
                <div className={styles.fields}>
                    <div className={styles.fieldContainer}>
                        <input
                            className={`${styles.textField} ${styles.xs_6}`}
                            type="text"
                            placeholder="Имя*"
                            name="name"
                            onChange={handleChange}
                            value={values.name}
                        />
                        <div className={styles.fieldError} title={errors.name}>{errors.name}</div>
                    </div>
                    <div className={styles.fieldContainer}>
                        <input
                            className={`${styles.textField} ${styles.xs_6}`}
                            type="text"
                            placeholder="Телефон*"
                            name="phone"
                            onChange={handleChange}
                            value={values.phone}
                        />
                        <div className={styles.fieldError} title={errors.phone}>{errors.phone}</div>
                    </div>

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
            </OrderComponent>
            <OrderComponent title="2. Доставка">
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
                        <div className={`${styles.popupTextField} ${styles.xs_6}`}>
                           <TimegIcon className={styles.icon}/> Доставим через  1 час 30 минут
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
                    <div className={styles.fieldContainer}>
                        <input
                            className={`${styles.textField} ${styles.xs_4}`}
                            type="text"
                            placeholder="№ квартиры/офиса"
                            name="flat"
                            onChange={handleChange}
                            value={values.flat}
                        />
                        <div className={styles.fieldError} title={errors.flat}>{errors.flat}</div>
                    </div>
                    <input
                        className={`${styles.textField} ${styles.xs_4}`}
                        type="text"
                        placeholder="Подъезд"
                        name="entrance"
                        onChange={handleChange}
                        value={values.entrance}
                    />
                    <div className={styles.fieldContainer}>
                        <input
                            className={`${styles.textField} ${styles.xs_4}`}
                            type="text"
                            placeholder="Телефон*"
                            name="phoneDelivery"
                            onChange={handleChange}
                            value={values.phoneDelivery}
                        />
                        <div className={styles.fieldError} title={errors.phoneDelivery}>{errors.phoneDelivery}</div>
                    </div>
                </div>
                <div className={styles.fields}>
                    <input
                        className={`${styles.textField} ${styles.xs_12}`}
                        type="text"
                        placeholder="Комментарий"
                        name="comment"
                        onChange={handleChange}
                        value={values.comment}
                    />
                </div>
            </OrderComponent>
            <OrderComponent title="3. Оплатить">
                <div className={styles.fields}>
                    <div className={`${styles.buttonField} ${styles.xs_12}`}>
                        {[
                            { value: "cardPayment", text: "Оплата онлайн" },
                            { value: "onlinePayment", text: "Курьеру картой" },
                            { value: "cash", text: "Наличными" },
                        ].map(({ value, text }) => (
                            <button
                                key={value}
                                className={
                                    `${styles.button} `
                                    + `${values.cash === value ? styles.activeButton :""} `
                                }
                                type="button"
                                value={value}
                                name="cash"
                                onClick={handleChange}
                            >
                                {text}
                            </button>
                        ))}
                    </div>
                </div>
            </OrderComponent>
            <OrderComponent title="4. Когда доставить">
                <div className={styles.fields}>
                    <div className={`${styles.buttonField} ${styles.xs_8}`}>
                        {[
                            { value: "soon", text: "В ближайшее время" },
                            { value: "toTime", text: "Ко времени" },
                        ].map(({ value, text }) => (
                            <button
                                key={value}
                                className={
                                    `${styles.button} `
                                    + `${values.timeDelivery === value ? styles.activeButton :""} `
                                }
                                type="button"
                                value={value}
                                name="timeDelivery"
                                onClick={handleChange}
                            >
                                {text}
                            </button>
                        ))}
                    </div>
                    {values.timeDelivery === "toTime" && (
                        <div className={`${styles.popupTextField} ${styles.xs_4}`}>
                            <input
                                    className={styles.textField}
                                    type="time"
                                    placeholder="Укажите время"
                                    name="toTime"
                                    onChange={handleChange}
                                    value={values.toTime}
                                />
                        </div>
                    )}
                </div>
                <div className={styles.fields}>
                    <div className={`${styles.textField} ${styles.xs_5} ${styles.personField}`}>
                        Кол-во персон
                        <div className={styles.personField}>
                            <button
                                className={styles.personButton}
                                name="person"
                                type="button"
                                value={+values.person - 1}
                                onClick={handleChange}
                                disabled={values.person <= 1}
                            >
                                -
                            </button>
                            <div className={styles.personCount}>
                                {values.person}
                            </div>
                            <button
                                className={styles.personButton}
                                name="person"
                                type="button"
                                value={+values.person + 1}
                                onClick={handleChange}
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.callback}>
                    Хотите мы позвоним?
                    <div className={styles.callbackField}>
                        <label className={styles.callbackLabel}>
                            <input
                                className={styles.callbackInput}
                                type="radio"
                                name="callback"
                                value="noCall"
                                checked={values.callback === "noCall"}
                                onChange={handleChange}
                            />
                            Не перезванивать
                        </label>
                    </div>
                    <div className={styles.callbackField}>
                        <label className={styles.callbackLabel}>
                            <input
                                className={styles.callbackInput}
                                type="radio"
                                name="callback"
                                value="call"
                                onChange={handleChange}
                            />
                            Потребуется звонок оператора
                        </label>
                    </div>
                   
                </div>
            </OrderComponent>
            <OrderComponent>
                <div className={`${styles.fields} ${styles.xs_12}`}>
                    <div className={styles.agreement}>
                        <label className={styles.agreementLabel}>
                            <input
                                className={styles.agreementInput}
                                type="checkbox"
                                name="agreement"
                                checked={values.agreement}
                                onChange={handleChangeCheckbox}
                                
                            />
                            Я согласен на обработку моих перс. данных в соответствии с Условиями
                        </label>
                    </div>
                    <button 
                        className={styles.buttonOrdering}
                        type="submit"
                    >
                        Оформить заказ
                    </button>
                </div>
            </OrderComponent>
        </form>
    );
};

export default OrderingForm;