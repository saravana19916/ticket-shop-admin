import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import React, { FC, useEffect, useState } from "react";
import { Badge, Card, ProgressBar } from "react-bootstrap";
import { ISalesSummary } from "../../../service/dashboard-sales-summary.service";
import { roundToNearestWhole } from "../../../utils/helpers";
interface ISalesSummaryByProductProps {
  salesSummary: ISalesSummary[] | undefined;
}
interface ISalesSummaryData {
  id: number;
  products: string;
  type: string;
  percentage: number;
  capacity: number;
  sold: number;
  available: number;
  revenue: number;
}

const SalesSummaryByProduct: FC<ISalesSummaryByProductProps> = ({
  salesSummary,
}) => {
  const [salesSummaryByProductDate, setSalesSummaryByProductData] = useState<
    ISalesSummary[]
  >([]);

  const [selectedType, setSelectedType] = useState(1);
  const _handleTypeChange = (type: 1 | 2 | 3 | 4) => {
    setSelectedType(type);
    switch (type) {
      case 1:
        setSalesSummaryByProductData(salesSummary || []);
        return;
      case 2:
        setSalesSummaryByProductData(salesSummary || []);
        return;
      case 3:
        setSalesSummaryByProductData(salesSummary || []);
        return;
      case 4:
        setSalesSummaryByProductData(salesSummary || []);
        return;
      default:
        setSalesSummaryByProductData(salesSummary || []);
        setSelectedType(1);
        return;
    }
  };
  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const pages = salesSummary
      ? Math.ceil(salesSummary.length / ITEMS_PER_PAGE)
      : 1;
    setTotalPages(pages);
  }, [salesSummary]);

  const currentData = salesSummary?.slice(
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
    <>
      <div className="col-12 ">
        <Card style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
          <Card.Header className="pt-5 pb-5 card-header-custom">
            <Card.Title as="h3" className="fw-600">
              Sales Summary by Product
            </Card.Title>
          </Card.Header>
          <Card.Body className="d-flex flex-column p-6">
            <div className="row px-0 px-lg-5 px-xl-5 mb-lg-3 mb-0">
              <div className="col-lg-4 col-12 mb-3">
                <input
                  type="text"
                  name="search"
                  id="searchAccess"
                  className="form-control border-0 rounded-pill bg-light-gray ps-4 pt-2"
                  placeholder="Search"
                />
              </div>
              <div className="col-2 d-none d-lg-block"></div>
              <div className="col-lg-6 col-12 mb-3 d-flex justify-content-between overflow-auto gap-2">
                <div>
                  <Badge className="bg-light text-dark rounded-pill py-2 px-5 fw-semibold cursor-pointer text-capitalize fs-12px">
                    Sort By <ChevronDownIcon className="h-4 w-4 ms-3" />
                  </Badge>
                </div>
                <div className="d-lg-block d-none">
                  <Badge
                    className={` rounded-pill py-3 px-5 fw-semibold text-capitalize cursor-pointer fs-12px ${
                      selectedType === 4 ? "bg-primary " : "bg-light text-dark"
                    }`}
                    onClick={() => _handleTypeChange(4)}
                  >
                    Type 4
                  </Badge>
                </div>
                <div className="d-lg-block d-none">
                  <Badge
                    className={`cursor-pointer rounded-pill py-3 px-5 fw-semibold text-capitalize fs-12px ${
                      selectedType === 3 ? "bg-primary " : "bg-light text-dark"
                    }`}
                    onClick={() => _handleTypeChange(3)}
                  >
                    Type 3
                  </Badge>
                </div>
                <div className="d-lg-block d-none">
                  <Badge
                    className={`cursor-pointer rounded-pill py-3 px-5 fw-semibold text-capitalize fs-12px ${
                      selectedType === 2 ? "bg-primary " : "bg-light text-dark"
                    }`}
                    onClick={() => _handleTypeChange(2)}
                  >
                    Type 2
                  </Badge>
                </div>
                <div className="d-lg-block d-none">
                  <Badge
                    className={`cursor-pointer rounded-pill py-3 px-5 fw-semibold text-capitalize fs-12px ${
                      selectedType === 1 ? "bg-primary " : "bg-light text-dark"
                    }`}
                    onClick={() => _handleTypeChange(1)}
                  >
                    Type 1
                  </Badge>
                </div>
                <div className="d-lg-none mb-2">
                  <Badge className="bg-light text-dark rounded-pill py-2 px-5 fw-semibold cursor-pointer text-capitalize fs-12px">
                    Type <ChevronDownIcon className="h-4 w-4 ms-3" />
                  </Badge>
                </div>
              </div>
            </div>
            <div className="row pt-lg-5 px-lg-6 pt-0 px-0 pt-xl-5 px-xl-6">
              <div className="col-12 table-responsive">
                <table className="table table-borderless text-nowrap">
                  <thead className="border-0">
                    <tr>
                      <th className="text-capitalize">Products</th>
                      <th className="text-capitalize">Type</th>
                      <th className="text-capitalize">Percentage</th>
                      <th></th>
                      <th className="text-capitalize">Capacity</th>
                      <th className="text-capitalize">Sold</th>
                      <th className="text-capitalize">Available</th>
                      <th className="text-capitalize ">Revenue</th>
                    </tr>
                  </thead>
                  <tbody className="border-0">
                    {salesSummary?.map((l: ISalesSummary, index) => (
                      <>
                        <tr
                          className="border-bottom"
                          key={index + 1 * Math.random() * 100}
                        >
                          <td className="fw-600 text-start w-auto w-lg-25 w-xl-25">
                            {l.name}
                          </td>
                          <td className="text-start">
                            {l.type || `Type ${selectedType}`}
                          </td>
                          <td className="pe-0">
                            <ProgressBar
                              variant="primary"
                              className="mb-3 progress-md"
                              now={
                                l.percentage
                                  ? roundToNearestWhole(l.percentage)
                                  : 0
                              }
                            />
                          </td>
                          <td className="ps-0 fs-14px">
                            {l.percentage
                              ? roundToNearestWhole(l.percentage)
                              : 0}
                            %
                          </td>
                          <td className="text-start">{l.capacity}</td>
                          <td className="text-start">{l.sold}</td>
                          <td className="text-start">{l.available}</td>
                          <td className="text-start">AED {l.revenue}</td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="d-flex justify-content-evenly align-items-center mt-auto pt-3">
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
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default SalesSummaryByProduct;
