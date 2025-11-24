import logoImg from "@/assets/img/icons/logo.png";
import burgerIcon from "@/assets/img/icons/burger.svg";
import styles from "./MobileHeader.module.scss";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { TextLink } from "@/shared/TextLink";

export const MobileHeader = () => {
  const [isMenuOpened, setMenuOpened] = useState(false);
  const portalRoot = document.getElementById("root");
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setMenuOpened(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        event.target instanceof Node &&
        !menuRef.current.contains(event.target)
      ) {
        setMenuOpened(false);
      }
    };

    if (isMenuOpened) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpened]);

  return (
    <>
      <header className={styles.MobileHeader}>
        <div className={styles.logo}>
          <img src={logoImg} alt="Gogol studio" />
        </div>
        <button onClick={() => setMenuOpened(!isMenuOpened)}>
          <img src={burgerIcon} alt="Menu" />
        </button>
        {portalRoot &&
          createPortal(
            <div
              className={classNames(styles.menuOverlay, {
                [styles.menuOverlayVisible]: isMenuOpened,
              })}
            >
              <div
                ref={menuRef}
                className={`${styles.menu} ${
                  isMenuOpened ? styles.menuVisible : ""
                }`}
              >
                <nav className={styles.menuNav}>
                  <TextLink
                    title="Главная"
                    className={styles.menuLink}
                    onClick={() => setMenuOpened(false)}
                  />
                  <TextLink
                    title="Актеры"
                    className={styles.menuLink}
                    onClick={() => setMenuOpened(false)}
                  />
                  <TextLink
                    url="/about"
                    title="О нас"
                    className={styles.menuLink}
                    onClick={() => setMenuOpened(false)}
                  />
                  <TextLink
                    title="О курсе"
                    className={styles.menuLink}
                    onClick={() => setMenuOpened(false)}
                  />
                  <TextLink
                    title="Новости"
                    className={styles.menuLink}
                    onClick={() => setMenuOpened(false)}
                  />
                </nav>
              </div>
            </div>,
            portalRoot
          )}
      </header>
    </>
  );
};
