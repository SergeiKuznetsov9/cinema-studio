import logoImg from "@/assets/img/icons/logo.png";

import styles from "./Footer.module.scss";
import { TextLink } from "@/shared/TextLink";

export const Footer = () => {
  return (
    <>
      <footer className={styles.Footer}>
        <div className={styles.logoContainer}>
          <img src={logoImg} alt="Gogol studio" />
        </div>
        <div className={styles.navContainer}>
          <nav>
            <ul>
              <TextLink url="#" title="Главная" />
              <TextLink url="#" title="Актеры" />
              <TextLink url="#" title="О нас" />
              <TextLink url="#" title="О курсе" />
              <TextLink url="#" title="Новости" />
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
};
