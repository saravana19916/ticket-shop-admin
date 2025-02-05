import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import React, { FC, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
interface IProps {
  activeCurrency: any;
}
interface IGuestListData {
  index: number;
  name: string;
  unit: number;
  value: number;
}
const guestListData: IGuestListData[] = [
  {
    index: 1,
    name: "Sponsors",
    unit: 45,
    value: 1500,
  },
  {
    index: 2,
    name: "Partners",
    unit: 45,
    value: 1500,
  },
  {
    index: 3,
    name: "Media",
    unit: 45,
    value: 1500,
  },
  {
    index: 4,
    name: "Staff",
    unit: 45,
    value: 1500,
  },
  {
    index: 5,
    name: "VIP's",
    unit: 45,
    value: 1500,
  },
];
const SalesByGuestList: FC<IProps> = ({ activeCurrency }) => {
  const ITEMS_PER_PAGE = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const pages = guestListData
      ? Math.ceil(guestListData.length / ITEMS_PER_PAGE)
      : 1;
    setTotalPages(pages);
  }, [guestListData]);

  const currentData = guestListData?.slice(
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
      <div className="d-flex mb-5 tile-min-max-width">
        <Card
          className="h-100"
          style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
        >
          <Card.Header className="pt-5 pb-5 card-header-custom">
            <Card.Title as="h3" className="fw-600">
              Guest List
            </Card.Title>
          </Card.Header>
          <Card.Body className="d-flex flex-column px-4">
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
                {guestListData?.map((l: IGuestListData) => (
                  <>
                    <tr
                      className="border-bottom"
                      key={l.index * Math.random() * 100}
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
                          {l.index}
                        </div>
                        <span className="text-start">{l.name}</span>
                      </td>
                      <td className="fw-600">{l.unit}</td>
                      <td className="fw-600">
                        {activeCurrency} {l.value}
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
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default SalesByGuestList;
