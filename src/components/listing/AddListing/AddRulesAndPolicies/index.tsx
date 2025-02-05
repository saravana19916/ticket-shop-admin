import React, { FC, useEffect, useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import AdditionalRules from "./AdditionalRules";
import Policies from "./Policies";
import PoliciesTable from "./PoliciesTable";
import {
  IPoliciesTableDataProps,
  policiesTableData,
} from "../../../../commondata/policiesData";

interface IAddRulesAndPoliciesProps {}
const index: FC<IAddRulesAndPoliciesProps> = ({}) => {
  const isAddListingLocation = window.location?.pathname === "/add-listing";

  const [tableData, setTableData] = useState<any>(policiesTableData);
  const [rulesData, setRulesData] = useState<string[]>([]);
  const [policyName, setPolicyName] = useState("");
  const [updateData, setUpdateDate] = useState<string>("");
  const nextId = tableData?.length + 1;

  useEffect(() => {
    if (updateData !== "") {
      const data = {
        id: nextId,
        policyName: policyName,
        policiesList: rulesData,
      };
      setTableData([...tableData, data]);
      setRulesData([]);
      setPolicyName("");
    }
  }, [updateData]);
  return (
    <>
      <div
        className={`row px-0 px-md-2 px-lg-4 px-xl-6 mx-xl-3 mx-0 mx-md-1 mx-lg-3 ${
          isAddListingLocation ? "" : "mt-6"
        }`}
      >
        <div className="card border">
          <div className="p-0 p-md-3">
            <div className="row">
              <div className="col-12 mb-3">
                <p className="fw-600 fs-26px text-black mb-3">
                  Rules & Policies
                </p>
                <span className="text-gray d-block mb-6 fs-12px">
                  in this section you answer certain questions that defines
                  parameters and rules of your listing
                </span>
              </div>
              <div className="col-12 mb-3">
                <Form.Group>
                  <Form.Label className="fs-5 fw-500 mb-3 text-primary-1">
                    Listing Type
                  </Form.Label>
                </Form.Group>
              </div>
              <div className="col-lg-8 col-12 mb-3">
                <Form.Group>
                  <InputGroup>
                    <InputGroup.Text className="p-3 fw-600 fs-6 ps-6 pe-6 w-75 border-full-rounded  text-black bg-secondary-1">
                      Event
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>
              </div>
              <AdditionalRules
                setRulesData={setRulesData}
                rulesData={rulesData}
              />
              <Policies
                setPolicyName={setPolicyName}
                policyName={policyName}
                setUpdateDate={setUpdateDate}
              />
              <PoliciesTable
                tableData={tableData}
                setTableData={setTableData}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
