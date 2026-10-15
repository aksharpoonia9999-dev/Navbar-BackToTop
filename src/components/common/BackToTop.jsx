import { useState, useEffect } from "react";
import Icons from "./Icons";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="w-12.5 h-12.5 cursor-pointer flex items-center justify-center rounded-full bg-red fixed bottom-7.5 right-7.5"
        >
          <Icons icon="upward" />
        </button>
      )}
    </>
  );
};

export default BackToTop;
