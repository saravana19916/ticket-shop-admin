import React, { FC, useState } from "react";
import CustomTab2 from "../shared/CustomTab2";
import ContactDetails from "./ContactDetails";
import Contract from "./Contract";
import Documentation from "./Documentation/index";
const tabsData = [
  {
    key: "documentation",
    label: "Documentation",
    content: <Documentation />,
  },
  {
    key: "contact",
    label: "Contact Details",
    content: <ContactDetails />,
  },
  {
    key: "contracts",
    label: "Contracts",
    content: <Contract />,
  },
];
interface IProps {}
const index: FC<IProps> = () => {
  const [activeTab, setActiveTab] = useState("documentation");
  return (
    <>
      <CustomTab2
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={tabsData}
      />
    </>
  );
};

export default index;
