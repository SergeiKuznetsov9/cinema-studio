import burgerIcon from "@/assets/img/icons/burger.svg";
import styles from "./MobileHeader.module.scss";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";

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
                  <a href="#" className={styles.menuLink}>
                    Главная
                  </a>
                  <a href="#" className={styles.menuLink}>
                    Актеры
                  </a>
                  <a href="#" className={styles.menuLink}>
                    О нас
                  </a>
                  <a href="#" className={styles.menuLink}>
                    О курсе
                  </a>
                  <a href="#" className={styles.menuLink}>
                    Новости
                  </a>
                </nav>
              </div>
            </div>,
            portalRoot
          )}
      </header>
    </>
  );
};
