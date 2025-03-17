import React, { Fragment, useState } from "react";
import BackBreadCrumb from "../../shared/BackBreadCrumb/BackBreadCrumb";
import { Tab, TabGroup, TabList, TabPanels } from "@headlessui/react";
import CustomTabButton from "../../shared/CustomTabButton";
import NameDetail from "./NameDetail/NameDetail";
import LevelOfInformation from "./LevelOfInformation/LevelOfInformation";
import PickList from "../../shared/PickList";
const tabList = ["Name", "Tickets", "Level of information"];
const index = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const initialSource = [
    "Diamond Table - The Spider",
    "Priority Access",
    "Ticket Cancellation",
    "Flexi Ticket",
    "Diamond Table - Reactor",
    "LED Wristband",
    "01.Platinum Table - The Spider",
    "01.Gold Table - Reactor",
    "01.Silver Table - Reactor",
    "02.Platinum Table - The Spider",
    "02.Gold Table - Reactor",
    "02.Silver Table - Reactor",
    "VIP Lounge Ticket",
    "Standing Table VIP Lounge",
    "Silver VIP Lounge",
    "Gold VIP Lounge",
    "Platinum VIP Lounge",
  ];
  const initialTarget = [
    "Early Bird Ticket +21",
    "02.Early Bird Ticket +21",
    "01.Early Bird Ticket +21",
    "Standard Ticket +21 (BOX OFFICE)",
    "02.Standard Ticket +21",
    "01.Standard Ticket +21",
    "Standard Ticket +21",
    "Priority Access (BOX OFFICE)",
    "Last minute Ticket +21",
    "01.Last minute ticket +21",
    "02.Last minute ticket +21",
    "Standard Ticket +21 - 3 Day Pass (BOX OFFICE)",
    "Standard Ticket +21 - 3 Day Pass",
    "01.Standard Ticket +21 - Pass 3 Days",
    "02 Standard Ticket +21 - Pass 3 Days",
    "Standard Ticket +21 - 6 Day Pass (BOX OFFICE)",
    "Standard Ticket +21 - 6 Day Pass",
  ];

  const handlePickListChange = (source: string[], target: string[]) => {
    console.log("Updated Source List:", source);
    console.log("Updated Target List:", target);
  };
  return (
    <>
      <div className="p-0 p-md-5"></div>
      <div className="row mb-4">
        <BackBreadCrumb />
        <div className="col-12 mb-3 mt-3">
          <span className="fw-600 fs-2">
            Scan Services {">"}
            <span>19th December - GA</span>
          </span>
        </div>
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
              {(() => {
                switch (selectedTab) {
                  case 0:
                    return <NameDetail />;
                  case 1:
                    return (
                      <>
                        <PickList
                          sourceItems={initialSource}
                          targetItems={initialTarget}
                          onChange={handlePickListChange}
                        />
                      </>
                    );
                  case 2:
                    return <LevelOfInformation />;
                  default:
                    return <NameDetail />;
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
