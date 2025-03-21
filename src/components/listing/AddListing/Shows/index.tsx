import { PlusIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import LandingPageWrapper from "../../../shared/LandingPageWrapper";
import ShowsLists from "./ShowsLists";
import { useEffect, useState } from "react";
import { LinkButtonPrimary } from "../../../styledComponents/styledButton";

const index = () => {
  const [itemsPerRow, setItemsPerRow] = useState<number | null>(0);
  const [maxWidth, setMaxWidth] = useState<string>("");
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const getItemsPerRow = () => {
    const rows = document.querySelectorAll("#myShowsList > *");
    const rowWidth = document.querySelector("#myShowsList")?.clientWidth || 0;
    let totalWidth = 0;
    let count = 0;

    rows.forEach((item) => {
      const itemWidth = item.clientWidth;
      totalWidth += itemWidth;
      if (totalWidth > rowWidth) {
        return;
      }
      count++;
    });

    setItemsPerRow(count);
  };
  useEffect(() => {
    getItemsPerRow();
    const screenWidth = window.innerWidth;
    setIsMobile(screenWidth < 899);
    const handleResize = () => getItemsPerRow();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (itemsPerRow !== null && !isMobile) {
      setMaxWidth(`${itemsPerRow * 450}px`);
    } else {
      setMaxWidth("");
    }
  }, [itemsPerRow, isMobile]);
  return (
    <>
      <LandingPageWrapper>
        <div className="row" style={{ maxWidth }}>
          <div className="col-6 mb-3">
            <p className="fw-600 fs-26px text-black mb-3">My Shows</p>
          </div>
          <div className="col-6 mb-3">
            <LinkButtonPrimary className="float-end mt-2 btn" to="/add-show">
              <span>Add Show</span>
            </LinkButtonPrimary>
          </div>
        </div>
        <div className="row">
          <ShowsLists />
        </div>
      </LandingPageWrapper>
    </>
  );
};

export default index;
