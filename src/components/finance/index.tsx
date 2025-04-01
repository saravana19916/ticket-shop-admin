import { TabGroup, TabList, Tab, TabPanels } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import CustomTabButton from "../shared/CustomTabButton";
import { Button, Card, Dropdown } from "react-bootstrap";
import InvoiceTable from "./Invoice/invoicetable";
import InvoiceList from "./Invoice/invoicelist";
import Tags from "../bootstrap/tags/tags";
import BadgesPills from "../bootstrap/badgespills/badgespills";
import Buttons from "../bootstrap/buttons/buttons";
import ReportList from "./Report/reportlist";
import BankAccount from "./BankAccount/bankaccount";
import Plan from "./Plan/plan";
const tabList = ["Plan", "Bank Account", "Invoice", "Reports"];
const index = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  return (
    <>
      <div className="p-0 p-md-2 p-lg-4 p-xl-4 mt-7 mb-6">
        <div className="my-5">
          <span className="fw-600 fs-26px">Finance</span>
        </div>
        <div className="my-6">
          <TabGroup className="row px-0 py-2" selectedIndex={selectedTab}>
            <TabList
              className="filter-container mb-7"
              style={{ margin: "auto" }}
            >
              {tabList.map((tabName, idx) => (
                <Tab as={Fragment} key={idx}>
                  {({ selected }) => (
                    <>
                      <CustomTabButton
                        tabName={tabName}
                        selected={selected}
                        index={idx}
                        setSelectedTab={setSelectedTab}
                      />
                    </>
                  )}
                </Tab>
              ))}
            </TabList>
            <TabPanels as="div" className="col-12">
              {(() => {
                switch (selectedTab) {
                  case 0:
                    return <Plan />;
                  case 1:
                    return <BankAccount />;
                  case 2:
                    return <InvoiceList />;
                  case 3:
                    return <ReportList />;
                  default:
                    return <></>;
                }
              })()}
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </>
  );
};

export default index;
