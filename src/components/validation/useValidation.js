import { useEffect, useRef, useState } from "react";

const useValidation = () => {
    const [errors, seterrors] = useState({});
	const errorsRef = useRef({});

	useEffect(() => {
		errorsRef.current = errors;
	}, [errors]);

    const regularPhone = /^\+375\(\d{2}\)\d{7}$/;
    const regularNumber = /[1-9][0-9]{0,2}/;

    const validate = (name, value) => {
        switch(name) {
            case "name": {
				if (value.length < 2 || value.length > 10) {
					seterrors((preverrorss) => ({ ...preverrorss, name: "Имя должно содержать от 2 до 10 букв"}));
				} else {
					seterrors((preverrorss) =>({...preverrorss, name: "" }));
				}
				break;
			}
            case "phone": {
				if (!regularPhone.test(value)) {
					seterrors((preverrorss) =>({ ...preverrorss, phone: "Образец для номера телефона +375(29)1234567"}));
				} else {
					seterrors((preverrorss) =>({...preverrorss, phone: "" }));
				}
				break;
			}
            case "flat": {
				if (!regularNumber.test(value)) {
					seterrors((preverrorss) =>({ ...preverrorss, flat: "Поле должно содержать только цифры"}));
				} else {
					seterrors((preverrorss) =>({...preverrorss, flat: "" }));
				}
				break;
			}
            case "phoneDelivery": {
				if (!regularPhone.test(value)) {
					seterrors((preverrorss) =>({ ...preverrorss, phoneDelivery: "Образец для номера телефона +375(29)1234567"}));
				} else {
					seterrors((preverrorss) =>({...preverrorss, phoneDelivery: "" }));
				}
				break;
			}
            default: break;
        }
    };
    return { errors, validate, errorsRef };
};

export default useValidation;
