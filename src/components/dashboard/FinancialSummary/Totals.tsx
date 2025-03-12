import React, { FC } from "react";
import { Badge, Card } from "react-bootstrap";
import TotalFinancialSummary from "../../../assets/images/total_financial_summary.png";
interface IFinancialSummaryTotalProps {}
interface ITotalFinancialSummaryDataProps {
  id: number;
  description: string;
  currency: string;
  net: string;
  vat: string;
  gross: string;
}
const TotalFinancialSummaryData: ITotalFinancialSummaryDataProps[] = [
  {
    id: 1,
    description: "Revenue",
    currency: "AED",
    net: "145,000.00",
    vat: "5,000.00",
    gross: "150,000.00",
  },
  {
    id: 2,
    description: "Refunds",
    currency: "AED",
    net: "145,000.00",
    vat: "5,000.00",
    gross: "-1,000.00",
  },
  {
    id: 3,
    description: "Discounts Costs",
    currency: "AED",
    net: "145,000.00",
    vat: "5,000.00",
    gross: "-2,000.00",
  },
  {
    id: 4,
    description: "Vouchers Costs",
    currency: "AED",
    net: "145,000.00",
    vat: "5,000.00",
    gross: "-3,000.00",
  },
  {
    id: 5,
    description: "FOC Costs",
    currency: "AED",
    net: "145,000.00",
    vat: "5,000.00",
    gross: "-4,000.00",
  },
  {
    id: 6,
    description: "Service Costs",
    currency: "AED",
    net: "145,000.00",
    vat: "5,000.00",
    gross: "-5,000.00",
  },
  {
    id: 7,
    description: "Transaction Costs",
    currency: "AED",
    net: "145,000.00",
    vat: "5,000.00",
    gross: "-6,000.00",
  },
  {
    id: 8,
    description: "Promotion Costs",
    currency: "AED",
    net: "145,000.00",
    vat: "5,000.00",
    gross: "-7,000.00",
  },
  {
    id: 9,
    description: "Additional Costs",
    currency: "AED",
    net: "145,000.00",
    vat: "5,000.00",
    gross: "-8,000.00",
  },
];
const Totals: FC<IFinancialSummaryTotalProps> = ({}) => {
  return (
    <>
      <div className="col-12 mb-5 shadow-l">
        <Card
          className="overflow-hidden"
          style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
        >
          <div className="row">
            <div className="col-md-3 col-12 pe-0">
              <Card.Body className="card-body-custom h-100">
                <Card.Title as="h3" className="text-dark">
                  Total
                </Card.Title>
                <div>
                  <div className="img-fluid d-md-block d-none">
                    <img
                      src={TotalFinancialSummary}
                      height={522}
                      alt="total_financial_summary"
                    />
                  </div>
                </div>
              </Card.Body>
            </div>
            <div className="col-md-9 col=12 ps-md-0 ps-3 ">
              <Card.Body className="px-0 pb-0 table-responsive h-100">
                <table className="table table-borderless h-100">
                  <thead className="border-0">
                    <tr>
                      <th className=" text-start fw-semibold text-capitalize pb-5 ps-6">
                        Description
                      </th>
                      <th className=" text-center fw-semibold text-capitalize pb-5">
                        Currency
                      </th>
                      <th className=" text-center fw-semibold text-capitalize pb-5">
                        Net
                      </th>
                      <th className=" text-center fw-semibold text-capitalize pb-5">
                        VAT
                      </th>
                      <th className=" text-end fw-semibold text-capitalize  pb-5 pe-7">
                        Gross
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border-0">
                    {TotalFinancialSummaryData?.map(
                      (l: ITotalFinancialSummaryDataProps) => (
                        <>
                          <tr
                            className="border-bottom"
                            key={l.id * Math.random() * 100}
                          >
                            <td className="fw-600  text-start pb-5  ps-6">
                              {l.description}
                            </td>
                            <td className="pb-5">{l.currency}</td>
                            <td className="pb-5">{l.net}</td>
                            <td className="pb-5">{l.vat}</td>
                            <td
                              className={`text-end fw-600 pb-5 pe-7 ${
                                l.description === "Revenue"
                                  ? "text-dark"
                                  : "text-primary"
                              }`}
                            >
                              {l.gross}
                            </td>
                          </tr>
                        </>
                      )
                    )}
                    <tr className="card-body-custom">
                      <td className="fw-600  text-start pb-6  ps-6">Total</td>
                      <td className="text-center pb-6">AED</td>
                      <td className="text-center pb-6">145,000.00</td>
                      <td className="text-center pb-6">5,000.00</td>
                      <td className="text-end fw-600 pb-6 pe-7">114,000.00</td>
                    </tr>
                  </tbody>
                </table>
              </Card.Body>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Totals;
