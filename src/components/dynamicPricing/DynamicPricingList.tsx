import { Button, Tab, TabGroup, TabList, TabPanels } from "@headlessui/react";
import React, { FC, Fragment, useState } from "react";
import List from "./List";
import { allDynamicPricing } from "./data";
import CustomTabButton from "../shared/CustomTabButton";
interface IProps {}
export interface IDynamicPricingDetailsProps {
  id?: number;
  mode: string; //By Date or By Demand
  strategyName: string;
  startDateTime: string;
  endDateTime: string;
  shopAllocation: string;
  status: "live" | "draft" | "offline";
}
const DynamicPricingList: FC<IProps> = ({}) => {
  const tabList = ["All", "Live", "Offline", "Draft"];
  const [selectedTab, setSelectedTab] = useState<number>(0);

  return (
    <>
      <div className="col-12 mb-3">
        <TabGroup className="row px-0 py-2" selectedIndex={selectedTab}>
          <TabList className="filter-container mb-5">
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
            <List list={allDynamicPricing} />
            <List
              list={allDynamicPricing?.filter(
                (dynamicPricing) => dynamicPricing?.status === "live"
              )}
            />
            <List
              list={allDynamicPricing?.filter(
                (dynamicPricing) => dynamicPricing?.status === "offline"
              )}
            />
            <List
              list={allDynamicPricing?.filter(
                (dynamicPricing) => dynamicPricing?.status === "draft"
              )}
            />
          </TabPanels>
        </TabGroup>
      </div>
    </>
  );
};

export default DynamicPricingList;
