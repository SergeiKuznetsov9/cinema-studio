import type { FC } from "react";
import styles from "./Button.module.scss";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
};

export const Button: FC<ButtonProps> = ({ title, onClick, ...props }) => {
  return (
    <button {...props} className={styles.Button} onClick={onClick}>
      {title}
    </button>
  );
};
