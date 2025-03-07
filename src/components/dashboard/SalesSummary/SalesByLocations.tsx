import React, { FC, useState, useEffect } from "react";
import { ISalesByLocation } from "../../../service/dashboard-sales-summary.service";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import LocationImg from "../../../assets/images/earthLocation.png";
import { Card } from "react-bootstrap";
import { roundToNearestWhole } from "../../../utils/helpers";
import NoDataFound from "../../shared/NoDataFound";
import { SalesByLocationsDemoData } from "../../../commondata/dashboarddata";

interface IProps {
  salesByLocation: ISalesByLocation[] | undefined;
  activeCurrency: any;
}
const SalesByLocations: FC<IProps> = ({ salesByLocation, activeCurrency }) => {
  const [data, setData] = useState<ISalesByLocation[]>();
  useEffect(() => {
    const pages = salesByLocation
      ? Math.ceil(salesByLocation?.length / ITEMS_PER_PAGE)
      : 1;
    setTotalPages(pages);
    if (!salesByLocation) {
      setData(SalesByLocationsDemoData);
    }
  }, [salesByLocation]);
  const ITEMS_PER_PAGE = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const currentData = salesByLocation?.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <>
      <div className="d-flex mb-5 tile-min-max-width">
        <Card
          className="h-100"
          style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
        >
          <Card.Header className="pt-5 pb-0 card-header-custom">
            <Card.Title as="h3" className="pb-5 fw-600">
              Sales by Locations
            </Card.Title>
            <div className="img-fluid">
              <img src={LocationImg} alt="Geo Location" />
            </div>
          </Card.Header>
          <Card.Body className="px-4 d-flex flex-column justify-content-center">
            {salesByLocation && salesByLocation.length > 0 ? (
              <>
                <table className="table table-borderless">
                  <thead className="border-0">
                    <tr>
                      <th>
                        <span className="badge rounded-pill py-2 px-3 px-xl-4 fw-semibold text-capitalize fs-12px badge-bg-gray">
                          Sort By <ChevronDownIcon className="h-4 w-4 ms-3" />
                        </span>
                      </th>
                      <th className=" text-center fw-semibold text-capitalize">
                        Unit
                      </th>
                      <th className=" text-center fw-semibold text-capitalize">
                        Value
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border-0">
                    {SalesByLocationsDemoData?.map(
                      (l: ISalesByLocation, index) => (
                        <>
                          <tr
                            className="border-bottom"
                            key={(index + 1) * Math.random() * 100}
                          >
                            <td className="d-flex gap-3 align-items-center fw-600">
                              <div
                                className="d-flex align-items-center justify-content-center text-white"
                                style={{
                                  width: "24px",
                                  height: "24px",
                                  borderRadius: "6px",
                                  backgroundColor: "#000",
                                }}
                              >
                                {index + 1}
                              </div>
                              <span className="text-start">
                                {l.name === "N/A" ? "UAE" : l.name}
                              </span>
                            </td>
                            <td className="fw-600">{l.unit}</td>
                            <td className="fw-600">
                              {activeCurrency}{" "}
                              {l.value ? roundToNearestWhole(l.value) : 0}
                            </td>
                          </tr>
                        </>
                      )
                    )}
                  </tbody>
                </table>
                <div className="d-flex justify-content-evenly align-items-center mt-auto pb-5">
                  <ChevronLeftIcon
                    onClick={handlePrevPage}
                    className={`h-4 w-4 ${
                      currentPage === 1
                        ? "text-black-50"
                        : "text-black cursor-pointer"
                    }`}
                  />
                  <span>
                    Page <span className="fw-600">{currentPage}</span> of{" "}
                    {totalPages}
                  </span>
                  <ChevronRightIcon
                    onClick={handleNextPage}
                    className={`h-4 w-4 ${
                      currentPage === totalPages
                        ? "text-black-50"
                        : "text-black cursor-pointer"
                    }`}
                  />
                </div>
              </>
            ) : (
              <>
                <table className="table table-borderless">
                  <thead className="border-0">
                    <tr>
                      <th>
                        <span className="badge rounded-pill py-2 px-3 px-xl-4 fw-semibold text-capitalize fs-12px badge-bg-gray">
                          Sort By <ChevronDownIcon className="h-4 w-4 ms-3" />
                        </span>
                      </th>
                      <th className=" text-center fw-semibold text-capitalize">
                        Unit
                      </th>
                      <th className=" text-center fw-semibold text-capitalize">
                        Value
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border-0">
                    {data?.map((l: ISalesByLocation, index) => (
                      <>
                        <tr
                          className="border-bottom"
                          key={(index + 1) * Math.random() * 100}
                        >
                          <td className="d-flex gap-3 align-items-center fw-600">
                            <div
                              className="d-flex align-items-center justify-content-center text-white"
                              style={{
                                width: "24px",
                                height: "24px",
                                borderRadius: "6px",
                                backgroundColor: "#000",
                              }}
                            >
                              {index + 1}
                            </div>
                            <span className="text-start">{l.name}</span>
                          </td>
                          <td className="fw-600">{l.unit}</td>
                          <td className="fw-600">
                            {activeCurrency}{" "}
                            {l.value ? roundToNearestWhole(l.value) : 0}
                          </td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
                <div className="d-flex justify-content-evenly align-items-center mt-auto pb-5">
                  <ChevronLeftIcon
                    onClick={handlePrevPage}
                    className={`h-4 w-4 ${
                      currentPage === 1
                        ? "text-black-50"
                        : "text-black cursor-pointer"
                    }`}
                  />
                  <span>
                    Page <span className="fw-600">{currentPage}</span> of{" "}
                    {totalPages}
                  </span>
                  <ChevronRightIcon
                    onClick={handleNextPage}
                    className={`h-4 w-4 ${
                      currentPage === totalPages
                        ? "text-black-50"
                        : "text-black cursor-pointer"
                    }`}
                  />
                </div>
                {/* <NoDataFound /> */}
              </>
            )}
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default SalesByLocations;
