import type { FC, ReactNode } from "react";
import styles from "./IconLink.module.scss";
import classNames from "classnames";

type IconLinkProps = {
  url: string;
  icon: ReactNode;
  className?: string;
  isBlank?: boolean;
  asLi?: boolean;
};

export const IconLink: FC<IconLinkProps> = ({
  url,
  icon,
  className,
  asLi = true,
  isBlank = true,
}) => {
  const linkElement = (
    <a
      target={isBlank ? "_blank" : "_self"}
      href={url}
      className={classNames(styles.IconLink, className)}
    >
      {icon}
    </a>
  );

  return asLi ? <li>{linkElement}</li> : linkElement;
};
