import React, { FC, Fragment, useState } from "react";
import ContactDetails from "./ContactDetails";
import Contract from "./Contract";
import Documentation from "./Documentation/index";
import { Tab, TabGroup, TabList, TabPanels, TabPanel } from "@headlessui/react";
import CustomTabButton from "../shared/CustomTabButton";
import { useAtom } from "jotai";
import { legalActiveTab } from "./store";
const tabList = ["Documentation", "Contact Details", "Contracts"];
interface IProps {}
const index: FC<IProps> = () => {
  const [selectedTab, setSelectedTab] = useAtom<number>(legalActiveTab);
  return (
    <>
      <div className="row mt-8">
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
                <Documentation />
              </TabPanel>
              <TabPanel>
                <ContactDetails />
              </TabPanel>
              <TabPanel>
                <Contract />
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </>
  );
};

export default index;
