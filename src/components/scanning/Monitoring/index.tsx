import React, { useState } from "react";
import { TabPanel } from "@headlessui/react";
import { ButtonPrimaryLight } from "../../styledComponents/styledButton";
import { Download, Filter } from "react-feather";
import { SuccessBadge } from "../../styledComponents/badge";
import { monitoringData } from "./data";
import { IMonitoringProps } from "./types";
import ExportScanningDataModal from "./ExportScanningDataModal";
import ProgressBar from "react-bootstrap/ProgressBar";
import OffcanvasFilter from "./OffcanvasFilter";

const Index = () => {
  const [refresh, setRefresh] = useState<boolean>(true);
  const [showExportModal, setShowExportModal] = useState<boolean>(false);
  const [showFilter, setShowFilter] = useState<boolean>(false);

  const handleRefresh = () => setRefresh((prev) => !prev);
  const handleExport = () => setShowExportModal((prev) => !prev);
  const handleFilterToggle = () => setShowFilter((prev) => !prev);

  return (
    <>
      <ExportScanningDataModal show={showExportModal} onClose={handleExport} />
      <OffcanvasFilter show={showFilter} onClose={handleFilterToggle} />

      <TabPanel>
        <div className="row">
          <div className="col-9 mb-8">
            {refresh && (
              <SuccessBadge>Refresh page every 30 seconds</SuccessBadge>
            )}
            <span
              className="d-inline-block ms-4 fw-semibold text-primary cursor-pointer"
              onClick={handleRefresh}
            >
              {refresh ? "turn off" : "turn on refresh every 30 seconds!"}
            </span>
          </div>
          <div className="col-3 mb-8">
            <div className="d-flex gap-3 float-end">
              <ButtonPrimaryLight className="btn" onClick={handleExport}>
                <Download className="w-5 h-5" />
              </ButtonPrimaryLight>
              <ButtonPrimaryLight className="btn" onClick={handleFilterToggle}>
                <Filter className="w-5 h-5" />
              </ButtonPrimaryLight>
            </div>
          </div>
          <div className="col-12 mb-3">
            <table className="table text-nowrap table-striped-columns table-striped">
              <thead>
                <tr>
                  <th className="fw-bold text-center border-end text-capitalize">
                    Product
                  </th>
                  <th className="fw-bold text-center border-end text-capitalize">
                    Scanned
                  </th>
                  <th className="fw-bold text-center border-end text-capitalize">
                    Remaining
                  </th>
                  <th className="fw-bold text-center border-end text-capitalize">
                    Total
                  </th>
                  <th className="fw-bold text-center text-capitalize">
                    Progress
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {monitoringData?.map((l: IMonitoringProps, i: number) => (
                  <tr key={i}>
                    <td className="text-center">
                      <span className="d-inline-block mt-2">{l.product}</span>
                    </td>
                    <td className="text-center">
                      <span className="d-inline-block mt-2">{l.scanned}</span>
                    </td>
                    <td className="text-center">
                      <span className="d-inline-block mt-2">{l.remaining}</span>
                    </td>
                    <td className="text-center">
                      <span className="d-inline-block mt-2">{l.total}</span>
                    </td>
                    <td className="pe-0">
                      <ProgressBar
                        variant="primary"
                        className="mt-2 progress-md"
                        now={l.progress || 0}
                      />
                    </td>
                    <td className="ps-0 fs-14px text-start">
                      <span className="d-inline-block mt-1 ms-3">
                        {l.progress || 0}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </TabPanel>
    </>
  );
};

export default Index;
