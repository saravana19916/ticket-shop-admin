import { TabPanel } from "@headlessui/react";
import { FC, useState } from "react";
import { Form } from "react-bootstrap"; // Correct import for Form
import { ButtonPrimary } from "../../styledComponents/styledButton";

interface SocialMediaFormData {
  facebook: string;
  instagram: string;
  tiktok: string;
  twitter: string;
  linkedin: string;
  threads: string;
  whatsapp: string;
}

const Index: FC = () => {
  return (
    <TabPanel>
      <div className="row" id="Role">
        Tab Role
      </div>
    </TabPanel>
  );
};

export default Index;
