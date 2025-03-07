import React, { FC, useEffect, useState } from "react";
import { Card, Badge } from "react-bootstrap";
import ProductCapacityImage from "../../../assets/images/product_capacity.png";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { ILiveAnalyticsSalesSummary } from "../../../service/dashboard-live-analysis.service";
import NoDataFound from "../../shared/NoDataFound";
interface IProductCapacityProps {
  salesSummary: ILiveAnalyticsSalesSummary[] | undefined;
}
interface IProductCapacityDataProps {
  id: number;
  name: string;
  sold: number;
  totalQuantity: number;
  reserved: number;
  capacity: string;
}
const ProductCapacityData: ILiveAnalyticsSalesSummary[] = [
  {
    name: "VIP",
    sold: 8500,
    reserved: 300,
    capacity: 10000,
    percentage: "85%",
  },
  {
    name: "Gold",
    sold: 7500,
    reserved: 400,
    capacity: 9500,
    percentage: "80%",
  },
  {
    name: "Complimentary 1",
    sold: 6000,
    reserved: 200,
    capacity: 8000,
    percentage: "50%",
  },
  {
    name: "Complimentary 4",
    sold: 5000,
    reserved: 150,
    capacity: 7000,
    percentage: "25%",
  },
  {
    name: "Complimentary 5",
    sold: 4000,
    reserved: 100,
    capacity: 6500,
    percentage: "50%",
  },
];
const ProductCapacity: FC<IProductCapacityProps> = ({ salesSummary }) => {
  const ITEMS_PER_PAGE = 5;
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
      <div className="col-12 col-lg-9">
        <Card
          className="overflow-hidden"
          style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
        >
          <div className="row">
            <div className="col-md-4 col-12">
              <Card.Body className="card-body-custom">
                <Card.Title as="h3">Product Capacity</Card.Title>
                <div>
                  <div className="img-fluid d-md-block d-none">
                    <img
                      src={ProductCapacityImage}
                      alt="product_capacity"
                      height={468}
                    />
                  </div>
                </div>
              </Card.Body>
            </div>
            <div className="col-md-8 col-12 ">
              <Card.Body className="d-flex flex-column h-100 justify-content-center">
                {ProductCapacityData && ProductCapacityData.length > 0 ? (
                  <>
                    <table className="table table-borderless">
                      <thead className="border-0">
                        <tr>
                          <th>
                            <span className="badge rounded-pill py-2 px-3 px-xl-4 fw-semibold text-capitalize fs-12px badge-bg-gray">
                              Sort By{" "}
                              <ChevronDownIcon className="h-4 w-4 ms-3" />
                            </span>
                          </th>
                          <th className=" text-center fw-semibold text-capitalize">
                            Sold
                          </th>
                          <th className=" text-center fw-semibold text-capitalize">
                            Reserved
                          </th>
                          <th className=" text-end fw-semibold text-capitalize  ">
                            Capacity
                          </th>
                        </tr>
                      </thead>
                      <tbody className="border-0">
                        {ProductCapacityData?.map(
                          (l: ILiveAnalyticsSalesSummary, index) => (
                            <>
                              <tr
                                className="border-bottom"
                                key={index + 11 * Math.random() * 100}
                              >
                                <td className="d-flex gap-3 align-items-center fw-600">
                                  <div
                                    className=" d-flex align-items-center justify-content-center text-white"
                                    style={{
                                      width: "24px",
                                      height: "24px",
                                      borderRadius: "6px",
                                      backgroundColor: "#000",
                                    }}
                                  >
                                    {index + 1}
                                  </div>
                                  {l.name}
                                </td>
                                <td className="fw-600 ">{l.sold}</td>
                                <td className="fw-600 ">{l.reserved}</td>
                                <td className="fw-600 text-end">
                                  <div className="text-end">
                                    <span className="d-block fw-600 fs-6">
                                      {l.capacity}
                                    </span>
                                    <div
                                      className={`bg-primary rounded-pill mb-1`}
                                      style={{
                                        padding: "3px",
                                        width: `${l.percentage}`,
                                      }}
                                    ></div>
                                    <small>
                                      {l.sold + l.reserved} out of {l.capacity}
                                    </small>
                                  </div>
                                </td>
                              </tr>
                            </>
                          )
                        )}
                      </tbody>
                    </table>
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
                  </>
                ) : (
                  <>
                    <NoDataFound />
                  </>
                )}
              </Card.Body>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default ProductCapacity;
