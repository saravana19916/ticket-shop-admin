import React, { FC, useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowDownIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import { IPaymentType } from "../../../service/dashboard-sales-summary.service";
import { roundToNearestWhole } from "../../../utils/helpers";
import NoDataFound from "../../shared/NoDataFound";
import { salesByPaymentTypeDemo } from "../../../commondata/dashboarddata";

interface IProps {
  salesByPaymentType: IPaymentType[] | undefined;
  activeCurrency: string;
}

const SalesByPaymentType: FC<IProps> = ({
  salesByPaymentType = [],
  activeCurrency,
}) => {
  const ITEMS_PER_PAGE = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sortOrder, setSortOrder] = useState<"none" | "asc" | "desc">("none");
  const [sortedData, setSortedData] =
    useState<IPaymentType[]>(salesByPaymentType);
  const [dataDemo, setDataDemo] = useState<IPaymentType[]>();
  useEffect(() => {
    const pages = Math.ceil(sortedData.length / ITEMS_PER_PAGE) || 1;
    setTotalPages(pages);
    if (!salesByPaymentType || salesByPaymentType.length == 0) {
      setDataDemo(salesByPaymentTypeDemo);
    }
  }, [sortedData]);

  useEffect(() => {
    setSortedData(salesByPaymentType);
  }, [salesByPaymentType]);

  const handleSort = () => {
    const newSortedData = [...sortedData];
    if (sortOrder === "none" || sortOrder === "desc") {
      newSortedData.sort((a, b) => (a.name || "").localeCompare(b.name || ""));
      setSortOrder("asc");
    } else if (sortOrder === "asc") {
      newSortedData.sort((a, b) => (b.name || "").localeCompare(a.name || ""));
      setSortOrder("desc");
    } else {
      setSortedData(salesByPaymentType); // Reset to original order
      setSortOrder("none");
    }
    setSortedData(newSortedData);
  };

  const currentData = sortedData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="d-flex mb-5 tile-min-max-width">
      <Card
        className="h-100"
        style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
      >
        <Card.Header className="card-header-custom pt-5 pb-5">
          <Card.Title as="h3" className="fw-600">
            Sales by Payment Type
          </Card.Title>
        </Card.Header>
        <Card.Body className="px-4 d-flex flex-column justify-content-center">
          {currentData && currentData.length > 0 ? (
            <>
              <table className="table table-borderless">
                <thead className="border-0">
                  <tr>
                    <th>
                      <span
                        className="badge rounded-pill py-2 px-3 px-xl-4 fw-semibold text-capitalize fs-12px badge-bg-gray cursor-pointer"
                        onClick={handleSort}
                      >
                        {sortOrder === "none" ? (
                          <>
                            Sort By
                            <ChevronDownIcon className="h-4 w-4 ms-3" />
                          </>
                        ) : sortOrder === "asc" ? (
                          <>
                            Name <ArrowUpIcon className="h-4 w-4 ms-3" />
                          </>
                        ) : (
                          <>
                            Name <ArrowDownIcon className="h-4 w-4 ms-3" />
                          </>
                        )}
                      </span>
                    </th>
                    <th className="text-center fw-semibold text-capitalize">
                      Unit
                    </th>
                    <th className="text-end fw-semibold text-capitalize">
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody className="border-0">
                  {currentData.map((l, index) => (
                    <tr
                      className="border-bottom"
                      key={index + 1 * Math.random() * 100}
                    >
                      <td className="d-flex gap-2 align-items-center fw-600 text-start text-capitalize">
                        <div
                          className="d-flex align-items-center justify-content-center text-white"
                          style={{
                            width: "24px",
                            height: "24px",
                            borderRadius: "6px",
                            backgroundColor: "#000",
                          }}
                        >
                          {(currentPage - 1) * ITEMS_PER_PAGE + index + 1}
                        </div>
                        {l.name || "Aaa"}
                      </td>
                      <td className="fw-600">{l.unit}</td>
                      <td className="fw-600 text-end">
                        {activeCurrency}{" "}
                        {l.value ? roundToNearestWhole(l.value) : 0}
                      </td>
                    </tr>
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
            </>
          ) : (
            <>
              <table className="table table-borderless">
                <thead className="border-0">
                  <tr>
                    <th>
                      <span
                        className="badge rounded-pill py-2 px-3 px-xl-4 fw-semibold text-capitalize fs-12px badge-bg-gray cursor-pointer"
                        onClick={handleSort}
                      >
                        {sortOrder === "none" ? (
                          <>
                            Sort By
                            <ChevronDownIcon className="h-4 w-4 ms-3" />
                          </>
                        ) : sortOrder === "asc" ? (
                          <>
                            Name <ArrowUpIcon className="h-4 w-4 ms-3" />
                          </>
                        ) : (
                          <>
                            Name <ArrowDownIcon className="h-4 w-4 ms-3" />
                          </>
                        )}
                      </span>
                    </th>
                    <th className="text-center fw-semibold text-capitalize">
                      Unit
                    </th>
                    <th className="text-end fw-semibold text-capitalize">
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody className="border-0">
                  {dataDemo?.map((l, index) => (
                    <tr
                      className="border-bottom"
                      key={index + 1 * Math.random() * 100}
                    >
                      <td className="d-flex gap-2 align-items-center fw-600 text-start text-capitalize">
                        <div
                          className="d-flex align-items-center justify-content-center text-white"
                          style={{
                            width: "24px",
                            height: "24px",
                            borderRadius: "6px",
                            backgroundColor: "#000",
                          }}
                        >
                          {(currentPage - 1) * ITEMS_PER_PAGE + index + 1}
                        </div>
                        {l.name || "Aaa"}
                      </td>
                      <td className="fw-600">{l.unit}</td>
                      <td className="fw-600 text-end">
                        {activeCurrency}{" "}
                        {l.value ? roundToNearestWhole(l.value) : 0}
                      </td>
                    </tr>
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
  );
};

export default SalesByPaymentType;
