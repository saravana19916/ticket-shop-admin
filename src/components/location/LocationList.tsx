import { Button, Tab, TabGroup, TabList, TabPanels } from "@headlessui/react";
import React, { FC, Fragment, useState } from "react";
import List from "./List";
import { allLocationData } from "./data";
import CustomTabButton from "../shared/CustomTabButton";
interface IProps {}
export interface ILocationDetailsProps {
  id?: number;
  locationName: string;
  website: string;
  country: string;
  city: string;
  address: string;
  zipcode: string;
  status: "live" | "draft" | "offline";
}
const LocationList: FC<IProps> = ({}) => {
  const tabList = ["All", "Live", "Offline", "Draft"];
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
          <TabPanels as="div" className="col-12 ">
            <List list={allLocationData} />
            <List
              list={allLocationData?.filter((info) => info?.status === "live")}
            />
            <List
              list={allLocationData?.filter(
                (info) => info?.status === "offline"
              )}
            />
            <List
              list={allLocationData?.filter((info) => info?.status === "draft")}
            />
          </TabPanels>
        </TabGroup>
      </div>
    </>
  );
};

export default LocationList;
