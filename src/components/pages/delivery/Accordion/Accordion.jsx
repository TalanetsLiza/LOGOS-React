import { useState } from "react";
import { accordionData } from "./accordionData";
import styles from "./Accordion.module.scss";
import { ReactComponent as UpIcon } from "../../../../assets/images/icon/up.svg";
import { ReactComponent as DownIcon } from "../../../../assets/images/icon/down.svg";

const Accordion = () => {
    const [openedId, setOpenedId] = useState(null);

    const toggleItem = (id) => {
        const newOpenedId = openedId !== id ? id : null;
        setOpenedId(newOpenedId);
    };

    return (
        <div className={styles.accordion}>
            {accordionData.map((item) => (
                <div key={item.id} className={styles.block}>
                    <div
                        className={styles.title}
                        onClick={() => toggleItem(item.id)}
                    >
                        {item.title}
                        {openedId === item.id ? <UpIcon /> : <DownIcon />}
                    </div>
                    {openedId === item.id && (
                        <div className={styles.content}>
                            {item.content}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;