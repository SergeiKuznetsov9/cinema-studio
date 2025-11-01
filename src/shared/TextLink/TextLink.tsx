import type { FC } from "react";
import styles from "./TextLink.module.scss";
import classNames from "classnames";

type TextLinkProps = {
  url: string;
  title: string;
  className?: string;
  isBlank?: boolean;
  asLi?: boolean;
};

export const TextLink: FC<TextLinkProps> = ({
  url,
  title,
  className,
  asLi = true,
  isBlank = false,
}) => {
  const linkElement = (
    <a
      target={isBlank ? "_blank" : "_self"}
      href={url}
      className={classNames(styles.TextLink, className)}
    >
      {title}
    </a>
  );

  return asLi ? <li>{linkElement}</li> : linkElement;
};
