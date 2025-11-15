import { contacts } from "@/assets/data/contacts";
import styles from "./Contacts.module.scss";
import viberImg from "@/assets/img/icons/viber.webp";
import tgImg from "@/assets/img/icons/telegram.webp";
import whatsappImg from "@/assets/img/icons/whatsapp.webp";
import mapImg from "@/assets/img/map.png";

import { IconLink } from "@/shared/IconLink";

export const Contacts = () => {
  const { header, name, address, phone, reqs } = contacts;

  return (
    <div className={styles.Contacts}>
      <div className={styles.contactsWrapper}>
        <div className={styles.data}>
          <h2 className={styles.header}>{header}</h2>
          <p className={styles.name}>{name}</p>
          <p className={styles.address}>{address}</p>
          <p className={styles.phone}>{phone}</p>
          <div className={styles.messangers}>
            <ul>
              <IconLink url="#" icon={<img src={viberImg} alt="vkontakte" />} />
              <IconLink url="#" icon={<img src={tgImg} alt="telegram" />} />
              <IconLink
                url="#"
                icon={<img src={whatsappImg} alt="instagram" />}
              />
            </ul>
          </div>
          <p className={styles.reqs}>{reqs}</p>
        </div>
        <div className={styles.map}>
          <img src={mapImg} alt="map" />
        </div>
      </div>
    </div>
  );
};
