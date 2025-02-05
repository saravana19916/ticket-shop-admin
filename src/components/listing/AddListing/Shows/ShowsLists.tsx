import { Button, Tab, TabGroup, TabList, TabPanels } from "@headlessui/react";
import React, { FC, Fragment, useState } from "react";
import List from "./List";
import { allShowsData } from "./data";
import CustomTabButton from "../../../shared/CustomTabButton";
interface IProps {}
export interface IShowDetailsProps {
  id?: number;
  showName: string;
  startDateTime: string;
  endDateTime: string;
  duration: string;
  doorOpenTime: string; // time only
  doorCloseTime: string; // time only
  language: string;
  hasIntermission: boolean;
  intermission?: {
    startTime: string; // time only
    endTime: string; //time only
    duration: string;
  };
  status: "live" | "draft" | "offline";
}
const PoliciesList: FC<IProps> = ({}) => {
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
          <TabPanels as="div" className="col-12">
            <List list={allShowsData} />
            <List
              list={allShowsData?.filter((show) => show?.status === "live")}
            />
            <List
              list={allShowsData?.filter((show) => show?.status === "offline")}
            />
            <List
              list={allShowsData?.filter((show) => show?.status === "draft")}
            />
          </TabPanels>
        </TabGroup>
      </div>
    </>
  );
};

export default PoliciesList;
