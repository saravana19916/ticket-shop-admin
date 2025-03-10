import React, { Fragment, useState } from "react";
import { Tab, TabGroup, TabList, TabPanels } from "@headlessui/react";
import CustomTabButton from "../shared/CustomTabButton";
import List from "./List";
import { ticketsList } from "./data";

const TicketsList = () => {
  const tabList = ["All", "PDF Ticket", "Mobile Ticket", "Physical Ticket"];
  const [selectedTab, setSelectedTab] = useState<number>(0);
  return (
    <>
      <div className="col-12 mb-3">
        <TabGroup className="row px-0 py-2" selectedIndex={selectedTab}>
          <TabList className="filter-container mb-7" style={{ margin: "auto" }}>
            {tabList.map((tabName, index) => (
              <Tab as={Fragment} key={index + 1}>
                {({ selected }) => (
                  <CustomTabButton
                    tabName={tabName}
                    selected={selected}
                    index={index}
                    setSelectedTab={setSelectedTab}
                  />
                )}
              </Tab>
            ))}
          </TabList>
          <TabPanels as="div" className="col-12">
            <List tickets={ticketsList} />
            <List
              tickets={ticketsList?.filter(
                (ticket) => ticket?.type === "PDF Ticket"
              )}
            />
            <List
              tickets={ticketsList?.filter(
                (ticket) => ticket?.type === "Mobile Ticket"
              )}
            />
            <List
              tickets={ticketsList?.filter(
                (ticket) => ticket?.type === "Physical Ticket"
              )}
            />
          </TabPanels>
        </TabGroup>
      </div>
    </>
  );
};

export default TicketsList;
