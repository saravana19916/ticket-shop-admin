import { Button, Tab, TabGroup, TabList, TabPanels } from "@headlessui/react";
import React, { FC, Fragment, useState } from "react";
import CustomTabButton from "../shared/CustomTabButton";
import List from "./List";
import { allZoneList } from "../zoningAndCapacity/data";
interface IProps {}
export interface IZoneDetailsProps {
  id?: number;
  zoneName: string;
  zoneType: string;
  selection: string; // Manual, automatic, manual & automatic
  format: string; // eg theater, ground
  status: "live" | "draft" | "offline";
}
const ZoningList: FC<IProps> = ({}) => {
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
            <List list={allZoneList} />
            <List
              list={allZoneList?.filter((zone) => zone?.status === "live")}
            />
            <List
              list={allZoneList?.filter((zone) => zone?.status === "offline")}
            />
            <List
              list={allZoneList?.filter((zone) => zone?.status === "draft")}
            />
          </TabPanels>
        </TabGroup>
      </div>
    </>
  );
};

export default ZoningList;
