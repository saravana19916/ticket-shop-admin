import { TabPanel } from "@headlessui/react";
import Visitors from "../../../assets/images/visitors.svg";
import Cart from "../../../assets/images/cart.svg";
import Queue from "../../../assets/images/queue.svg";
import Reserve from "../../../assets/images/reserved.png";
import React, { FC } from "react";
import { Badge, Card } from "react-bootstrap";
import SalesVsAttendance from "./SalesVsAttendance";
import ProductCapacity from "./ProductCapacity";
import { useQuery } from "@tanstack/react-query";
import { fetchDashboardLiveAnalysis } from "../../../service/dashboard-live-analysis.service";
interface ILiveAnalyticsProps {
  currentEventId: number | string | undefined;
}
const index: FC<ILiveAnalyticsProps> = ({ currentEventId }) => {
  const {
    data: liveAnalyticsData,
    isLoading,
    error,
    isRefetching,
  } = useQuery({
    queryKey: ["dashboardLiveAnalytics", currentEventId],
    queryFn: () => {
      if (!currentEventId) {
        throw new Error("Event ID is not available.");
      }
      return fetchDashboardLiveAnalysis(currentEventId);
    },
    enabled: !!currentEventId,
  });
  const liveAnalytics = liveAnalyticsData?.data;
  console.log(liveAnalyticsData, "liveAnalyticsData");

  return (
    <>
      <TabPanel>
        <div className="row">
          <div className="mb-1 tile-min-max-width">
            <Card
              className="overflow-hidden "
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
            >
              <Card.Body className="py-3 px-6">
                <div className="ms-auto">
                  <div className="mb-2 mt-2">
                    <span
                      className="badge text-white rounded-pill px-4"
                      style={{ padding: "6px", backgroundColor: "#000000" }}
                    >
                      Unit
                    </span>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <div className="mt-2">
                    <h6 className="fw-semibold fs-6">In Queue</h6>
                    <h2 className="mb-0 number-font">
                      {liveAnalytics?.in_queue || 0}
                    </h2>
                  </div>
                  <div className="ms-auto mb-3 opacity-25">
                    <img
                      src={Queue}
                      alt="queue"
                      height={53}
                      width={64}
                      style={{ opacity: 0.1 }}
                    />
                  </div>
                </div>
                <div className="ms-auto">
                  <span className="text-gray fs-10px">
                    Lorem ipsum dolor sit amet, eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.
                  </span>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="mb-1 tile-min-max-width">
            <Card
              className="overflow-hidden "
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
            >
              <Card.Body className="py-3 px-6">
                <div className="ms-auto">
                  <div className="mb-2 mt-2">
                    <span
                      className="badge text-white rounded-pill px-4"
                      style={{ padding: "6px", backgroundColor: "#000000" }}
                    >
                      Unit
                    </span>
                  </div>
                </div>
                <div className="d-flex mb-2">
                  <div className="mt-2">
                    <h6 className="fw-semibold fs-6">Store Visitor</h6>
                    <h2 className="mb-0 number-font">
                      {liveAnalytics?.store_visitor || 0}
                    </h2>
                  </div>
                  <div
                    className="ms-auto"
                    style={{ marginTop: "-10px", marginBottom: "14px" }}
                  >
                    <img
                      src={Visitors}
                      alt="Visitors"
                      height={64}
                      width={64}
                      style={{ opacity: 0.1 }}
                    />
                  </div>
                </div>
                <div className="ms-auto">
                  <span className="text-gray fs-10px">
                    Lorem ipsum dolor, eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.{" "}
                  </span>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="mb-1 tile-min-max-width">
            <Card
              className="overflow-hidden "
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
            >
              <Card.Body className="py-3 px-6">
                <div className="ms-auto">
                  <div className="mb-2 mt-2">
                    <span
                      className="badge text-white rounded-pill px-4"
                      style={{ padding: "6px", backgroundColor: "#000000" }}
                    >
                      Unit
                    </span>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <div className="mt-2">
                    <h6 className="fw-semibold fs-6">Pending carts</h6>
                    <h2 className="mb-0 number-font">
                      {liveAnalytics?.pending_carts || 0}
                    </h2>
                  </div>
                  <div className="ms-auto mb-3 me-3">
                    <img
                      src={Cart}
                      alt="Visitors"
                      height={54}
                      width={64}
                      style={{ opacity: 0.1 }}
                    />
                  </div>
                </div>
                <div className="ms-auto">
                  <span className="text-gray fs-10px">
                    Lorem ipsum dolor, eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.{" "}
                  </span>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="mb-1 tile-min-max-width">
            <Card
              className="overflow-hidden "
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
            >
              <Card.Body className="py-3 px-6">
                <div className="ms-auto">
                  <div className="mb-2 mt-2">
                    <span
                      className="badge text-white rounded-pill px-4"
                      style={{ padding: "6px", backgroundColor: "#000000" }}
                    >
                      Unit
                    </span>
                  </div>
                </div>
                <div className="d-flex mb-4">
                  <div className="mt-2">
                    <h6 className="fw-semibold fs-6">Reserved</h6>
                    <h2 className="mb-0 number-font">
                      {liveAnalytics?.reserved || 0}
                    </h2>
                  </div>
                  <div className="ms-auto mb-4 mt-3">
                    <img
                      src={Reserve}
                      alt="Visitors"
                      width={98}
                      style={{ opacity: 0.1 }}
                    />
                  </div>
                </div>
                <div className="ms-auto">
                  <span className="text-gray fs-10px">
                    Lorem ipsum dolor sit amet, eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.
                  </span>
                </div>
              </Card.Body>
            </Card>
          </div>
          <SalesVsAttendance
            sales={liveAnalytics?.sales}
            attend={liveAnalytics?.attended}
            absent={liveAnalytics?.absent}
          />
          <ProductCapacity salesSummary={liveAnalytics?.sales_summary} />
        </div>
      </TabPanel>
    </>
  );
};

export default index;
