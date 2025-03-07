import React, { FC, Fragment } from "react";
import { Card, Badge } from "react-bootstrap";
import {
  TotalCost,
  TotalClearing,
  TotalRevenueSalesHighlights,
  PhysicalVsDigital,
  TotalUser,
  SalesByPhases,
  TopPerformingShops,
  TopPromoCodes,
} from "../../../commondata/chartdata";
import { TabPanel } from "@headlessui/react";
import PageVisitsVsSales from "./PageVisitsVsSales";
import SalesDetails from "./SalesDetails";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchDashboardSalesHighlights } from "../../../service/dashboard-sales-summary.service";
import { roundToNearestWhole } from "../../../utils/helpers";
import NumberDisplay from "../../shared/NumberDisplay";
interface ISalesSummaryProps {
  activeCurrency: string;
  currentEventId: number | string | undefined;
}
const salesSummary: FC<ISalesSummaryProps> = ({
  activeCurrency,
  currentEventId,
}) => {
  const {
    data: salesSummaryResponse,
    isLoading,
    error,
    isRefetching,
  } = useQuery({
    queryKey: ["dashboardSalesHighlights", currentEventId],
    queryFn: () => {
      if (!currentEventId) {
        throw new Error("Event ID is not available.");
      }
      return fetchDashboardSalesHighlights(currentEventId);
    },
    enabled: !!currentEventId,
  });
  const salesSummaryData = salesSummaryResponse?.data;

  return (
    <>
      <TabPanel>
        <div className="row">
          <div className="mb-1 tile-min-max-width">
            <Card
              className="overflow-hidden"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
            >
              <Card.Body className="py-3 px-6">
                <div className="ms-auto">
                  <div className="mb-2 mt-2">
                    <span
                      className="badge text-white rounded-pill px-4"
                      style={{ padding: "6px", backgroundColor: "#000000" }}
                    >
                      Units{" "}
                    </span>
                  </div>
                </div>
                <div className="d-flex mb-2">
                  <div className="mt-2">
                    <h6 className="fw-semibold fs-6">Total Sales</h6>
                    <h2 className="mb-0 number-font">
                      <NumberDisplay
                        value={salesSummaryData?.total_sales || 392}
                      />
                    </h2>
                  </div>
                  <div
                    className="ms-auto"
                    style={{
                      transform: "translateY(-12px)",
                    }}
                  >
                    <div className="chart-wrapper">
                      <TotalUser />
                    </div>
                  </div>
                </div>
                <div className="ms-auto">
                  <span className="text-gray fs-10px">
                    Lorem ipsum dolor sit amet, consectetur, sed do eiusmod
                    magna aliqua.
                  </span>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="mb-1 tile-min-max-width">
            <Card
              className="overflow-hidden"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
            >
              <Card.Body className="py-3 px-6">
                <div className="ms-auto">
                  <div className="mb-2 mt-2">
                    <span
                      className="badge text-white rounded-pill px-4"
                      style={{ padding: "6px", backgroundColor: "#000000" }}
                    >
                      {activeCurrency}
                    </span>
                  </div>
                </div>
                <div className="d-flex mb-2">
                  <div className="mt-2">
                    <h6 className="fw-semibold fs-6">Total Costs</h6>
                    <h2 className="mb-0 number-font">
                      <NumberDisplay
                        value={salesSummaryData?.total_costs || 188}
                      />
                    </h2>
                  </div>
                  <div className="ms-auto">
                    <div className="chart-wrapper mt-1">
                      <TotalCost />
                    </div>
                  </div>
                </div>
                <div className="ms-auto">
                  <span className="text-gray fs-10px">
                    Lorem ipsum dolor sit amet, consectetur, sed do eiusmod
                    magna aliqua.
                  </span>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="mb-1 tile-min-max-width">
            <Card
              className="overflow-hidden"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
            >
              <Card.Body className="py-3 px-6">
                <div className="ms-auto">
                  <div className="mb-2 mt-2">
                    <span
                      className="badge text-white rounded-pill px-4"
                      style={{ padding: "6px", backgroundColor: "#000000" }}
                    >
                      {activeCurrency}
                    </span>
                  </div>
                </div>
                <div className="d-flex mb-2">
                  <div className="mt-2">
                    <h6 className="fw-semibold fs-6">Total Revenue</h6>
                    <h2 className="mb-0 number-font">
                      <NumberDisplay
                        value={salesSummaryData?.total_revenue || 120}
                      />
                    </h2>
                  </div>
                  <div className="ms-auto">
                    <div className="chart-wrapper mt-1">
                      <TotalRevenueSalesHighlights />
                    </div>
                  </div>
                </div>
                <div className="ms-auto">
                  <span className="text-gray fs-10px">
                    Lorem ipsum dolor sit amet, consectetur, sed do eiusmod
                    magna aliqua.
                  </span>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="mb-1 tile-min-max-width">
            <Card
              className="overflow-hidden"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
            >
              <Card.Body className="py-3 px-6">
                <div className="ms-auto">
                  <div className="mb-2 mt-2">
                    <span
                      className="badge text-white rounded-pill px-4"
                      style={{ padding: "6px", backgroundColor: "#000000" }}
                    >
                      {activeCurrency}
                    </span>
                  </div>
                </div>
                <div className="d-flex mb-2">
                  <div className="mt-2">
                    <h6 className="fw-semibold fs-6">Total Clearing</h6>
                    <h2 className="mb-0 number-font">
                      <NumberDisplay
                        value={salesSummaryData?.total_clearing || 981}
                      />
                    </h2>
                  </div>
                  <div className="ms-auto">
                    <div className="chart-wrapper mt-1">
                      <TotalClearing />
                    </div>
                  </div>
                </div>
                <div className="ms-auto">
                  <span className="text-gray fs-10px">
                    Lorem ipsum dolor sit amet, consectetur, sed do eiusmod
                    magna aliqua.
                  </span>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="d-flex mb-5 tile-min-max-width">
            <Card
              className="overflow-hidden h-100 d-flex flex-column"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
            >
              <Card.Body className="pb-0 flex-grow-0 card-body-custom">
                <Card.Title as="h3" className="text-dark fw-600">
                  Digital Vs Physical
                </Card.Title>
                <div className="chartjs-wrapper-demo">
                  <PhysicalVsDigital />
                </div>
              </Card.Body>
              <div
                id="flotback-chart"
                className="flot-background flex-grow-1"
              ></div>
              <Card.Body className="flex-grow-0">
                <div className="d-flex mb-4 mt-4 pt-1">
                  <div
                    className="avatar avatar-lg text-white text-center me-3 rounded-2"
                    style={{ backgroundColor: "#ed003b" }}
                  >
                    {salesSummaryData?.digital_sale?.percentage
                      ? roundToNearestWhole(
                          salesSummaryData?.digital_sale?.percentage
                        )
                      : 17}
                    %
                  </div>
                  <div className="d-flex flex-column justify-content-center">
                    <h6 className="mb-1 mt-2 fw-600 fs-6">Digital Sales</h6>
                    <p className="fw-normal fs-12">
                      <span className="text-success me-1">3.5%</span>
                      increased
                    </p>
                  </div>
                  <div className="ms-auto my-auto">
                    <p className="fw-600 fs-6">
                      {salesSummaryData?.digital_sale?.value
                        ? roundToNearestWhole(
                            salesSummaryData?.digital_sale?.value
                          )
                        : 1714}
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-4 mt-4 pt-1">
                  <div
                    className="avatar avatar-lg text-white text-center me-3 rounded-2"
                    style={{ backgroundColor: "#4FB1DF" }}
                  >
                    {salesSummaryData?.physical_sales?.percentage
                      ? roundToNearestWhole(
                          salesSummaryData?.physical_sales?.percentage
                        )
                      : 71}
                    %
                  </div>
                  <div className="d-flex flex-column justify-content-center">
                    <h6 className="mb-1 mt-1 fw-600 fs-6">Physical Sales</h6>
                    <p className="fw-normal fs-12">
                      <span className="text-success me-1">1.2%</span>
                      increased
                    </p>
                  </div>
                  <div className="ms-auto my-auto">
                    <p className="fw-600 fs-6">
                      {salesSummaryData?.physical_sales?.value
                        ? roundToNearestWhole(
                            salesSummaryData?.physical_sales?.value
                          )
                        : 208612}
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="d-flex mb-5 tile-min-max-width">
            <Card
              className="overflow-hidden h-100 d-flex flex-column"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
            >
              <Card.Body className="pb-0 flex-grow-0 card-body-custom">
                <Card.Title as="h3" className="text-dark fw-600">
                  Sales by phases
                </Card.Title>
                <div className="chartjs-wrapper-demo">
                  <SalesByPhases
                    series={[
                      {
                        name: "Sales by Phase",
                        data: [
                          salesSummaryData?.sales_by?.phases?.pre_sale?.value ||
                            134,
                          salesSummaryData?.sales_by?.phases?.early_bird
                            ?.value || 198,
                          salesSummaryData?.sales_by?.phases?.general?.value ||
                            90,
                          salesSummaryData?.sales_by?.phases?.last_minute
                            ?.value || 18,
                        ],
                      },
                    ]}
                    categories={[
                      "Pre Sales",
                      "Early Bird",
                      "General Sales",
                      "Last Minute",
                    ]}
                  />
                </div>
              </Card.Body>
              <div
                id="flotback-chart"
                className="flot-background flex-grow-1"
              ></div>
              <Card.Body className="flex-grow-0">
                <div className="d-flex mb-4">
                  <div
                    className="avatar avatar-md text-white text-center me-3 rounded-2"
                    style={{ backgroundColor: "#A5A5A5" }}
                  >
                    {salesSummaryData?.sales_by?.phases?.pre_sale?.percentage
                      ? roundToNearestWhole(
                          salesSummaryData?.sales_by?.phases?.pre_sale
                            ?.percentage
                        )
                      : 34}
                    %
                  </div>
                  <div className="d-flex flex-column justify-content-center">
                    <h6 className="fw-600 fs-6 mt-2 mb-2">Pre Sale</h6>
                  </div>
                  <div className="ms-auto my-auto">
                    <p className="fw-600 fs-6 mb-0">
                      {salesSummaryData?.sales_by?.phases?.pre_sale?.value
                        ? salesSummaryData?.sales_by?.phases?.pre_sale?.value
                        : 134}
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <div
                    className="avatar avatar-md text-white text-center me-3 rounded-2"
                    style={{ backgroundColor: "#51B1DF" }}
                  >
                    {salesSummaryData?.sales_by?.phases?.early_bird?.percentage
                      ? roundToNearestWhole(
                          salesSummaryData?.sales_by?.phases?.early_bird
                            ?.percentage
                        )
                      : 8}
                    %
                  </div>
                  <div className="d-flex flex-column justify-content-center">
                    <h6 className="fw-600 fs-6 mt-2 mb-2">Early Bird</h6>
                  </div>
                  <div className="ms-auto my-auto">
                    <p className="fw-600 fs-6 mb-0">
                      {salesSummaryData?.sales_by?.phases?.early_bird?.value
                        ? salesSummaryData?.sales_by?.phases?.early_bird?.value
                        : 198}{" "}
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-4">
                  <div
                    className="avatar avatar-md text-white text-center me-3 rounded-2"
                    style={{ backgroundColor: "#53B9A9" }}
                  >
                    {salesSummaryData?.sales_by?.phases?.general?.percentage
                      ? roundToNearestWhole(
                          salesSummaryData?.sales_by?.phases?.general
                            ?.percentage
                        )
                      : 64}
                    %
                  </div>
                  <div className="d-flex flex-column justify-content-center">
                    <h6 className="fw-600 fs-6 mt-2 mb-2">General Sales</h6>
                  </div>
                  <div className="ms-auto my-auto">
                    <p className="fw-600 fs-6 mb-0">
                      {salesSummaryData?.sales_by?.phases?.general?.value
                        ? salesSummaryData?.sales_by?.phases?.general?.value
                        : 252}
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <div
                    className="avatar avatar-md text-white text-center me-3 rounded-2"
                    style={{ backgroundColor: "#ed003b" }}
                  >
                    {salesSummaryData?.sales_by?.phases?.last_minute?.percentage
                      ? roundToNearestWhole(
                          salesSummaryData?.sales_by?.phases?.last_minute
                            ?.percentage
                        )
                      : 9}
                    %
                  </div>
                  <div className="d-flex flex-column justify-content-center">
                    <h6 className="fw-600 fs-6 mt-2 mb-2">Last Minute</h6>
                  </div>
                  <div className="ms-auto my-auto">
                    <p className="fs-6 fw-600 mb-0">
                      {salesSummaryData?.sales_by?.phases?.last_minute?.value
                        ? salesSummaryData?.sales_by?.phases?.last_minute?.value
                        : 18}
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="d-flex mb-5 tile-min-max-width">
            <Card
              className="overflow-hidden h-100 d-flex flex-column"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
            >
              <Card.Body className="pb-0 flex-grow-0 card-body-custom">
                <Card.Title as="h3" className="text-dark fw-600">
                  Top 4 performing shops
                </Card.Title>
                <div className="chartjs-wrapper-demo">
                  <TopPerformingShops />
                </div>
              </Card.Body>
              <div
                id="flotback-chart"
                className="flot-background flex-grow-1"
              ></div>
              <Card.Body className="flex-grow-0">
                <div className="d-flex mb-4">
                  <div
                    className="avatar avatar-md text-white text-center me-3 rounded-2"
                    style={{ backgroundColor: "#A5A5A5" }}
                  >
                    10%
                  </div>
                  <div className="d-flex flex-column justify-content-center">
                    <h6 className="fw-600 fs-6 mt-2 mb-2">Virgin Stores</h6>
                  </div>
                  <div className="ms-auto my-auto">
                    <p className="fw-600 fs-6 mb-0">1,500</p>
                  </div>
                </div>
                <div className="d-flex mb-4">
                  <div
                    className="avatar avatar-md text-white text-center me-3 rounded-2"
                    style={{ backgroundColor: "#51B1DF" }}
                  >
                    30%
                  </div>
                  <div className="d-flex flex-column justify-content-center">
                    <h6 className="fw-600 fs-6 mt-2 mb-2">Ticket Master</h6>
                  </div>
                  <div className="ms-auto my-auto">
                    <p className="fw-600 mb-0 fs-6">7,500</p>
                  </div>
                </div>
                <div className="d-flex mb-4">
                  <div
                    className="avatar avatar-md text-white text-center me-3 rounded-2"
                    style={{ backgroundColor: "#53B9A9" }}
                  >
                    18%
                  </div>
                  <div className="d-flex flex-column justify-content-center">
                    <h6 className="fw-600 fs-6 mt-2 mb-2">Platinum List</h6>
                  </div>
                  <div className="ms-auto my-auto">
                    <p className="fw-600 mb-0 fs-6">4,700</p>
                  </div>
                </div>
                <div className="d-flex mb-0">
                  <div
                    className="avatar avatar-md text-white text-center me-3 rounded-2"
                    style={{ backgroundColor: "#ed003b" }}
                  >
                    42%
                  </div>
                  <div className="d-flex flex-column justify-content-center">
                    <h6 className="fw-600 fs-6 mt-2 mb-2">Tixbox.com</h6>
                  </div>
                  <div className="ms-auto my-auto">
                    <p className="fw-600 mb-0 fs-6">8,600</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="d-flex mb-5 tile-min-max-width">
            <Card
              className="overflow-hidden h-100 d-flex flex-column"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
            >
              <Card.Body className="pb-0 flex-grow-0 card-body-custom">
                <Card.Title as="h3" className="text-dark fw-600">
                  Top 4 promo codes
                </Card.Title>
                <div className="chartjs-wrapper-demo">
                  <TopPromoCodes />
                </div>
              </Card.Body>
              <div
                id="flotback-chart"
                className="flot-background flex-grow-1"
              ></div>
              <Card.Body className="flex-grow-0">
                <div className="d-flex mb-4">
                  <div
                    className="avatar avatar-md text-white text-center me-3 rounded-2"
                    style={{ backgroundColor: "#A5A5A5" }}
                  >
                    10%
                  </div>
                  <div className="d-flex flex-column justify-content-center">
                    <h6 className="fw-600 fs-6 mt-2 mb-2">Qatar Airways</h6>
                  </div>
                  <div className="ms-auto my-auto">
                    <p className="fw-600 mb-0 fs-6">1,500</p>
                  </div>
                </div>
                <div className="d-flex mb-4">
                  <div
                    className="avatar avatar-md text-white text-center me-3 rounded-2"
                    style={{ backgroundColor: "#51B1DF" }}
                  >
                    30%
                  </div>
                  <div className="d-flex flex-column justify-content-center">
                    <h6 className="fw-600 fs-6 mt-2 mb-2">Ooredoo</h6>
                  </div>
                  <div className=" ms-auto my-auto">
                    <p className="fw-600 mb-0 fs-6">7,500</p>
                  </div>
                </div>
                <div className="d-flex mb-4">
                  <div
                    className="avatar avatar-md text-white text-center me-3 rounded-2"
                    style={{ backgroundColor: "#53B9A9" }}
                  >
                    18%
                  </div>
                  <div className="d-flex flex-column justify-content-center">
                    <h6 className="fw-600 fs-6 mt-2 mb-2">Emirates NBD</h6>
                  </div>
                  <div className="ms-auto my-auto">
                    <p className="fw-600 mb-0 fs-6">4,700</p>
                  </div>
                </div>
                <div className="d-flex mb-4">
                  <div
                    className="avatar avatar-md text-white text-center me-3 rounded-2"
                    style={{ backgroundColor: "#ed003b" }}
                  >
                    42%
                  </div>
                  <div className="d-flex flex-column justify-content-center">
                    <h6 className="fw-600 fs-6 mt-2 mb-2">Yas Island</h6>
                  </div>
                  <div className="ms-auto my-auto">
                    <p className="fw-600 mb-0 fs-6 mb-0">8,600</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <PageVisitsVsSales />
          <SalesDetails
            salesByProduct={salesSummaryData?.sales_by?.product}
            salesByLocation={salesSummaryData?.sales_by?.locations}
            salesByPayment={salesSummaryData?.sales_by?.payment_type}
            salesByTime={salesSummaryData?.sales_by?.time}
            activeCurrency={activeCurrency}
            salesSummary={salesSummaryData?.sales_summary}
          />
        </div>
        <div className="row"></div>
      </TabPanel>
    </>
  );
};

export default salesSummary;
