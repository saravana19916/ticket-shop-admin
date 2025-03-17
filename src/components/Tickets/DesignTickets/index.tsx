import React, { FC, Fragment, useEffect, useRef, useState } from "react";
import LandingPageWrapper from "../../shared/LandingPageWrapper";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import CustomTabButton from "../../shared/CustomTabButton";
import PDFTicket from "./PDFTicket";
import MobileTicket from "./MobileTicket";
import PhysicalTicket from "./PhysicalTicket";

const tabList = ["PDF Ticket", "Mobile Ticket", "Physical Ticket"];

const index = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  return (
    <>
      <LandingPageWrapper>
        <div className="row">
          <div className="col-6 mb-6">
            <p className="fw-600 fs-26px text-black mb-3">
              Design your Tickets
            </p>
          </div>
          <div className="col-6 mb-6"></div>
        </div>
        <div className="row">
          <div className="col-12 mb-3">
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
                <TabPanel>
                  <PDFTicket />
                </TabPanel>
                <TabPanel>
                  <MobileTicket />
                </TabPanel>
                <TabPanel>
                  <PhysicalTicket />
                </TabPanel>
              </TabPanels>
            </TabGroup>
          </div>
        </div>
      </LandingPageWrapper>
    </>
  );
};

export default index;
