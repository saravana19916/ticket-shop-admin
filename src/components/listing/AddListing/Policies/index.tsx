import { PlusIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import PoliciesList from "./PoliciesLists";
import LandingPageWrapper from "../../../shared/LandingPageWrapper";
import { useState, useEffect } from "react";

const index = () => {
  const [itemsPerRow, setItemsPerRow] = useState<number | null>(0);
  const [maxWidth, setMaxWidth] = useState<string>("");
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const getItemsPerRow = () => {
    const rows = document.querySelectorAll("#myPoliciesList > *");
    const rowWidth =
      document.querySelector("#myPoliciesList")?.clientWidth || 0;
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
            <p className="fw-600 fs-26px text-black mb-3">My Policies</p>
          </div>
          <div className="col-6 mb-3">
            <Link
              to="/add-policy"
              className="btn badge-red float-end rounded-pill mt-2 fs-6 px-6 py-2"
            >
              <PlusIcon
                className="w-5 h-5 me-1"
                style={{ marginBottom: "2px" }}
              />{" "}
              Add Policy
            </Link>
          </div>
        </div>
        <div className="row">
          <PoliciesList />
        </div>
      </LandingPageWrapper>
    </>
  );
};

export default index;
