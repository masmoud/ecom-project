import { useEffect, useState } from "react";

export const useMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hasWindow = typeof window !== "undefined";

  useEffect(() => {
    if (hasWindow) {
      const handleResize = () => {
        if (window.innerWidth >= 768) {
          setIsOpen(false);
        }
      };

      handleResize();

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  return { isOpen, setIsOpen };
};
