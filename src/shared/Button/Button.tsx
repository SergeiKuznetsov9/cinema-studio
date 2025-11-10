import type { FC } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  className?: string;
};

export const Button: FC<ButtonProps> = ({
  title,
  onClick,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={classNames(styles.Button, className)}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
