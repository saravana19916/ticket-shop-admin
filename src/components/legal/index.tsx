import React, { FC, useState } from "react";
import CustomTab2 from "../shared/CustomTab2";
const tabsData = [
  {
    key: "documentation",
    label: "Documentation",
    content: <p>Wishlist content here...</p>,
  },
  {
    key: "contact",
    label: "Contact Details",
    content: <p>Account Password content here...</p>,
  },
  {
    key: "contracts",
    label: "Contracts",
    content: <p>Contact Details content here...</p>,
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
