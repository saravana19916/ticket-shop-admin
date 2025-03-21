import { TabPanel } from "@headlessui/react";
import { FC, useState } from "react";
import { Form } from "react-bootstrap";
import {
  FormInputStyled,
  FormLabelStyled,
} from "../../styledComponents/styledForm";
import { ButtonSecondary } from "../../styledComponents/styledButton";

const Index: FC = () => {
  return (
    <TabPanel>
      <div className="row" id="General">
        Tab General
      </div>
    </TabPanel>
  );
};

export default Index;
