import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const backToTop = () => {
  const [backToTop, setBackToTop] = useState("");
  useEffect(() => {
    let scrollTimeout: any;

    const handleScroll = () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Hide the button while scrolling
      setBackToTop("");

      // Show the button after scrolling stops for 150ms
      scrollTimeout = setTimeout(() => {
        if (window.scrollY > 100) {
          setBackToTop(
            "d-flex align-items-center justify-content-center bg-white text-primary h-7 w-7"
          );
        }
      }, 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);

  const screenUp = () => {
    window.scrollTo({
      top: 10,
      behavior: "auto",
    });
  };
  return (
    <div>
      <Link
        to="#"
        id="back-to-top"
        onClick={screenUp}
        className={`${backToTop} text-center`}
      >
        <ChevronUpIcon className="w-5 h-5 mb-1" />
        {/* <i className="fa fa-angle-up"></i> */}
      </Link>
    </div>
  );
};

backToTop.propTypes = {};

backToTop.defaultProps = {};

export default backToTop;
