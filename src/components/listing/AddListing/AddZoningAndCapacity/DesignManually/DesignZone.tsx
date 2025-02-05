import React, {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Form } from "react-bootstrap";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/outline";

import { FormikErrors, FormikTouched } from "formik";
import {
  IAddListingAddZoningAndCapacity,
  IAddListingAddZoningAndCapacityZoneDesign,
} from "../type";
import {
  FormInputStyled,
  FormLabelStyled,
} from "../../../../styledComponents/styledForm";
import ModelAddDesignZones from "./ModelAddDesignZones";
interface IProps {
  errors: FormikErrors<IAddListingAddZoningAndCapacity>;
  values: IAddListingAddZoningAndCapacity;
  touched: FormikTouched<IAddListingAddZoningAndCapacity>;
  handleOnChange: (
    field: string,
    value: string | null | IAddListingAddZoningAndCapacityZoneDesign[]
  ) => void;
  zoneDesignData: IAddListingAddZoningAndCapacityZoneDesign[];
  setZoneDesignData: Dispatch<
    SetStateAction<IAddListingAddZoningAndCapacityZoneDesign[]>
  >;
}
const zoneValueOptions = [
  {
    label: "Floor",
    value: "Floor",
  },
  {
    label: "Section",
    value: "Section",
  },
  {
    label: "Block",
    value: "Block",
  },
  {
    label: "Row",
    value: "Row",
  },
  {
    label: "Wing",
    value: "Wing",
  },
];
const DesignZone: FC<IProps> = ({
  values,
  handleOnChange,
  zoneDesignData,
  setZoneDesignData,
}) => {
  const [zonesValues, setZoneValues] = useState(zoneValueOptions);
  useEffect(() => {
    const zoneDesignValues = values.zoneDesign
      ?.map((l) => l.label)
      ?.filter((l) => l !== null)
      ?.filter((l) => l !== undefined);
    const unSelectedZoneValues = zoneValueOptions?.filter(
      (zone) => !zoneDesignValues.includes(zone.value)
    );

    setZoneValues(unSelectedZoneValues || []);
  }, [values, zoneDesignData]);
  const _handleZoneSelect = (zone: string, index: number) => {
    const zoneDesign = values.zoneDesign;
    zoneDesign[index] = { label: zone, value: values.zoneDesign[index].value };
    handleOnChange(`zoneDesign`, zoneDesign);
    setZoneDesignData(zoneDesign);
  };
  const _handleZoneValueOnChange = (event: ChangeEvent<any>, index: number) => {
    const { name, value } = event.target;
    const zoneDesign = values.zoneDesign;
    zoneDesign[index] = { label: name, value: value };
    handleOnChange(`zoneDesign`, zoneDesign);
    setZoneDesignData(zoneDesign);
  };
  const [showDesignZone, setSDesignZone] = useState(false);

  const viewDesignZoneClose = () => setSDesignZone(false);
  const viewDesignZoneShow = () => setSDesignZone(true);

  const [labelsDesignZone, setDesignZoneLabels] = useState<string[]>([]);

  const handleAddLabelDesignZone = (newLabel: string) => {
    setDesignZoneLabels((prev) => [...prev, newLabel]);
  };
  const handleDeleteLabelDesignZone = (indexToDelete: number) => {
    setDesignZoneLabels((prev) =>
      prev.filter((_, index) => index !== indexToDelete)
    );
  };
  return (
    <>
      <div className="col-12 px-0 mb-7">
        <Form.Group>
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <Form.Label className="fs-5 fw-500 text-black">
                Design Zones
              </Form.Label>
              <span className="text-gray d-block mb-6 fs-12px">
                in this section you design, sections and sub sections within
                your zone.
              </span>
            </div>
            <button
              className="p-1 bg-primary border-0 text-white rounded-pill"
              onClick={viewDesignZoneShow}
            >
              <PlusIcon className="w-5 h-5" />
            </button>
          </div>
          <div className="row">
            <div className="col-xl-6 col-12 mb-7 pe-0">
              <Form.Group>
                <FormLabelStyled>Floor</FormLabelStyled>
                <FormInputStyled
                  type="text"
                  className="form-control"
                  placeholder="Enter Floor"
                />
              </Form.Group>
            </div>
            <div className="col-xl-6 col-12 mb-7 pe-0">
              <Form.Group>
                <FormLabelStyled>Section</FormLabelStyled>
                <FormInputStyled
                  type="text"
                  className="form-control"
                  placeholder="Enter Section"
                />
              </Form.Group>
            </div>
            <div className="col-xl-6 col-12 mb-7 pe-0">
              <Form.Group>
                <FormLabelStyled>Block</FormLabelStyled>
                <FormInputStyled
                  type="text"
                  className="form-control"
                  placeholder="Enter Block"
                />
              </Form.Group>
            </div>
            <div className="col-xl-6 col-12 mb-7 pe-0">
              <Form.Group>
                <FormLabelStyled>Row</FormLabelStyled>
                <FormInputStyled
                  type="text"
                  className="form-control"
                  placeholder="Enter Row"
                />
              </Form.Group>
            </div>
            <div className="col-xl-6 col-12 mb-7 pe-0">
              <Form.Group>
                <FormLabelStyled>Wing</FormLabelStyled>
                <FormInputStyled
                  type="text"
                  className="form-control"
                  placeholder="Enter Wing"
                />
              </Form.Group>
            </div>
            {labelsDesignZone.map((label, index) => (
              <div className="col-xl-6 col-12 mb-7 pe-0" key={index}>
                <Form.Group>
                  <FormLabelStyled>{label}</FormLabelStyled>
                  <div style={{ position: "relative" }}>
                    <FormInputStyled
                      type="text"
                      className="form-control"
                      placeholder={`Enter ${label}`}
                    />
                    <button
                      style={{
                        position: "absolute",
                        top: "0.65rem",
                        right: "0.75rem",
                      }}
                      className="p-1 bg-primary border-0 text-white rounded-pill"
                      onClick={() => handleDeleteLabelDesignZone(index)}
                    >
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </div>
                </Form.Group>
              </div>
            ))}
            {/* {values?.zoneDesign?.map((design, index) => (
              <>
                <div className="col-xl-6 col-12 mb-3">
                  <InputGroup>
                    <Dropdown>
                      <CustomDropdownToggle
                        variant="light"
                        id="dropdown-zone"
                        className="w-50 text-start p-2 fs-6 d-flex justify-content-between align-items-center custom-dropdown-toggle-start-rounded border-gray-light-2 bg-gray-light-2 border-gray-light-3 border-inline-end-0"
                      >
                        <span className="d-inline-block ms-3 fs-6 fw-600">
                          {design.label}
                        </span>
                        <ChevronDownIcon className="w-4 h-4 me-3 dropdown-icon-dark" />
                      </CustomDropdownToggle>
                      <Dropdown.Menu className="fs-6 w-50 m-0">
                        {zonesValues?.map((l) => (
                          <>
                            <Dropdown.Item
                              key={l.value}
                              eventKey={l.value}
                              onClick={() => _handleZoneSelect(l.value, index)}
                            >
                              {l.label}
                            </Dropdown.Item>
                          </>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                    <FormControl
                      className="p-4 fw-normal fs-6 ps-6 form-control-text-input-rounded-end form-control-border-color"
                      type="text"
                      value={design.value || ""}
                      name={design.label}
                      onChange={(event) =>
                        _handleZoneValueOnChange(event, index)
                      }
                    />
                  </InputGroup>
                </div>
              </>
            ))} */}
          </div>
        </Form.Group>
      </div>
      <ModelAddDesignZones
        show={showDesignZone}
        onClose={viewDesignZoneClose}
        onAddLabel={handleAddLabelDesignZone}
      />
    </>
  );
};

export default DesignZone;
