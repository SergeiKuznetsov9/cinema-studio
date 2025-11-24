import { useEffect, type FC, type ReactNode } from "react";
import { useLocation } from "react-router-dom";

type ScrollToTopProps = {
  children: ReactNode;
};

export const ScrollToTop: FC<ScrollToTopProps> = ({ children }) => {
  const location = useLocation();
  const currentUrl = location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentUrl]);

  return <>{children}</>;
};
