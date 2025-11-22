import styles from "./Header.module.scss";
import { DesktopHeader } from "./DesktopHeader";
import { MobileHeader } from "./MobileHeader";

export const Header = () => {
  return (
    <>
      <DesktopHeader />
      <MobileHeader />
      <div className={styles.mockHeader} />
      <div className={styles.decorationWrapper}>
        <div className={styles.decoration}></div>
      </div>
    </>
  );
};
