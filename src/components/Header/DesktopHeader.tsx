import logoImg from "@/assets/img/icons/logo.png";
import viberImg from "@/assets/img/icons/viber.webp";
import tgImg from "@/assets/img/icons/telegram.webp";
import whatsappImg from "@/assets/img/icons/whatsapp.webp";

import styles from "./DesktopHeader.module.scss";
import { TextLink } from "@/shared/TextLink";
import { IconLink } from "@/shared/IconLink";
import { header } from "@/assets/data/header";

export const DesktopHeader = () => {
  return (
    <>
      <header className={styles.DesktopHeader}>
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
          <div className={styles.contactsContainer}>
            <ul className={styles.contactsList}>
              <li>{header.phone}</li>
              <ul>
                <IconLink
                  url="#"
                  icon={<img src={viberImg} alt="vkontakte" />}
                />
                <IconLink url="#" icon={<img src={tgImg} alt="telegram" />} />
                <IconLink
                  url="#"
                  icon={<img src={whatsappImg} alt="instagram" />}
                />
              </ul>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};
