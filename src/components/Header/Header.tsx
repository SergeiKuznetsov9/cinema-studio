import logoImg from "@/assets/img/icons/logo.png";
import vkImg from "@/assets/img/icons/vk.png";
import tgImg from "@/assets/img/icons/tg.png";
import instImg from "@/assets/img/icons/inst.png";

import styles from "./Header.module.scss";
import { TextLink } from "@/shared/TextLink";
import { IconLink } from "@/shared/IconLink";

export const Header = () => {
  return (
    <>
      <header className={styles.Header}>
        <div className={styles.logoContainer}>
          <img src={logoImg} alt="Gogol studio" />
        </div>
        <div className={styles.navContainer}>
          <nav>
            <ul>
              <TextLink url="#" title="Главная" />
              <TextLink url="#" title="Актеры" />
              <TextLink url="#" title="О нас" />
              <TextLink url="#" title="Контакты" />
              <TextLink url="#" title="Новости" />
            </ul>
          </nav>
          <div className={styles.contactsContainer}>
            <ul className={styles.contactsList}>
              <li>+375-29-0000000</li>
              <li>+375-29-0000000</li>
              <ul>
                <IconLink url="#" icon={<img src={vkImg} alt="vkontakte" />} />
                <IconLink url="#" icon={<img src={tgImg} alt="telegram" />} />
                <IconLink
                  url="#"
                  icon={<img src={instImg} alt="instagram" />}
                />
              </ul>
            </ul>
          </div>
        </div>
      </header>
      <div className={styles.decoration}></div>
    </>
  );
};
