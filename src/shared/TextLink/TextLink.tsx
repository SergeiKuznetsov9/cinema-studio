import type { FC } from "react";
import styles from "./TextLink.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";

type TextLinkProps = {
  title: string;
  url?: string;
  className?: string;
  isBlank?: boolean;
  asLi?: boolean;
  onClick?: () => void;
};

export const TextLink: FC<TextLinkProps> = ({
  url = "/",
  title,
  className,
  asLi = true,
  isBlank = false,
  onClick = () => {},
}) => {
  const linkElement = (
    <Link
      target={isBlank ? "_blank" : "_self"}
      to={url}
      className={classNames(styles.TextLink, className)}
      onClick={onClick}
    >
      {title}
    </Link>
  );

  return asLi ? <li>{linkElement}</li> : linkElement;
};
