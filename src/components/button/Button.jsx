import styles from "./Button.module.scss";

const Button = ({ title, id, handleClick, addStyles }) => {
    return (
        <button
            id={id}
			onClick={handleClick}
			className={`${styles.button} ${addStyles}`}
        >
            {title}
        </button>
    )
};

export default Button;