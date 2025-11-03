import { ParallaxSection } from "@/shared/ParallaxSection";
import projectorTheatreImg from "@/assets/img/backgrounds/view-black-white-light-projector-theatre-1.jpg";
import { Button } from "@/shared/Button";
import styles from "./Contacts.module.scss";

export const Contacts = () => (
  <ParallaxSection
    backgroundImage={`url(${projectorTheatreImg})`}
    scrollingContent={
      <div className={styles.Contacts}>
        <div className={styles.contactsContent}>
          <h2>СТУДИЯ ТЕАТРА И КИНО</h2>
          <p>
            Есть много вариантов Lorem Ipsum, но большинство из них имеет не
            всегда приемлемые модификации, например, юмористические вставки или
            слова, которые даже отдалённо не напоминают латынь. Если вам нужен
            Lorem Ipsum для серьёзного проекта, вы наверняка не хотите
            какой-нибудь шутки, скрытой в середине абзаца.
          </p>
          <div className={styles.buttonContainer}>
            <Button title="О нас" />
            <Button title="Контакты" />
          </div>
        </div>
      </div>
    }
  />
);
