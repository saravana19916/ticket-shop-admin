import { PlusIcon } from "@heroicons/react/24/outline";
import React, { FC, Fragment, useState } from "react";

import ZoningProduct from "./ZoningProduct";
import ZoningAndCapacityAllocation from "./ZoningAndCapacityAllocation";
import ZoningAndCapacityTable from "./ZoningAndCapacityTable";
import {
  addListingAddZoningAndCapacityInitialValue,
  addListingAddZoningAndCapacityValidationSchema,
} from "./helper";
import { Formik } from "formik";
import { zoningAndCapacitySectionData } from "../../../../commondata/zoningAndCapacity";
import {
  IAddListingAddZoningAndCapacity,
  IAddListingAddZoningAndCapacityZoneDesign,
} from "./type";
import { Accordion, OverlayTrigger, Tooltip } from "react-bootstrap";
import { toast } from "react-toastify";
import ZoningAccordion from "./ZoningAccordion";
import { FormInputDescriptionStyled } from "../../../styledComponents/styledForm";
import DefineZones from "./DefineZones";
import AddRowAndZones from "./AddRowAndZones";
import {
  ButtonPrimary,
  ButtonSecondaryDarkGrey,
} from "../../../styledComponents/styledButton";
const tabList = ["Design Manually", "Use Design Tool"];

interface IAddZoningAndCapacityProps {}

const AddZoningAndCapacity: FC<IAddZoningAndCapacityProps> = ({}) => {
  const isAddListingLocation = window.location?.pathname === "/add-listing";

  const [tableData, setTableData] = useState<IAddListingAddZoningAndCapacity[]>(
    zoningAndCapacitySectionData
  );
  const [zoneDesignData, setZoneDesignData] = useState<
    IAddListingAddZoningAndCapacityZoneDesign[]
  >([]);
  const _handleOnChange = (
    field: string,
    value:
      | string
      | number
      | undefined
      | null
      | (string | number)[]
      | IAddListingAddZoningAndCapacityZoneDesign[],
    setFieldValue: any
  ) => {
    setFieldValue(field, value);
  };
  let dataIndex = tableData[tableData?.length - 1]?.id;
  dataIndex = dataIndex ? dataIndex + 1 : Math.round(Math.random() * 98) + 1;
  const isSeparateUrl =
    window.location?.pathname === "/add-zoning-and-capacity" ||
    window.location?.pathname.startsWith("/edit-zoning-and-capacity/");

  return (
    <>
      <Formik
        initialValues={addListingAddZoningAndCapacityInitialValue}
        validationSchema={addListingAddZoningAndCapacityValidationSchema}
        onSubmit={(values, { resetForm }) => {
          const id = dataIndex;
          const data = {
            ...values,
            zoneDesign: [
              ...values.zoneDesign?.filter((l) => l.label !== undefined),
              {
                label: undefined,
                value: undefined,
              },
            ],
            id,
          };
          setTableData((prev: any) => {
            return [data, ...prev];
          });
          toast.success("Zoning & Capacity Product created successfully!");
          resetForm();
        }}
      >
        {({}) => (
          <>
            <div
              className={`row px-0 px-md-2 px-lg-4 px-xl-6 mx-xl-3 mx-0 mx-md-1 mx-lg-3 ${
                isSeparateUrl ? "mt-7" : ""
              }`}
            >
              <div className="card border p-4 rounded-16px">
                <div className="p-0 p-md-5">
                  <div className="row">
                    <div className="col-12 mb-3">
                      <p className="fw-600 fs-26px text-black mb-3 d-flex align-items-center">
                        Zoning & Capacity
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip>
                              In this section you can design your zones
                              manually. If you wish to design your floor plan
                              using the Design tools, click on Design Floor
                              Plan.{" "}
                            </Tooltip>
                          }
                        >
                          <i className="fe fe-info d-inline-block ms-3 cursor-pointer"></i>
                        </OverlayTrigger>
                      </p>
                    </div>
                    <DefineZones />
                    <AddRowAndZones />
                    <div className="col-12 mb-6 mt-5">
                      <div className="float-end d-flex gap-4">
                        {/* <ButtonSecondaryDarkGrey type="button" className="btn">
                          Add Another Zone
                        </ButtonSecondaryDarkGrey> */}
                        <ButtonPrimary
                          type="submit"
                          className="btn"
                          style={{ minWidth: "118px" }}
                        >
                          Add
                        </ButtonPrimary>
                      </div>
                    </div>
                    <div className="col-12 my-6">
                      <FormInputDescriptionStyled>
                        You can amend edit, update, delete , activate and
                        deactivate your zones and make changes to your sub
                        section, in the{" "}
                        <span className="text-primary-1">
                          'Zoning & Capacity'
                        </span>{" "}
                        Tab. A list of your created zones and
                        sections/subsections/rows are listed below.
                      </FormInputDescriptionStyled>
                    </div>
                    {/* <TabGroup className="row px-0 px-md-2 px-lg-4 px-xl-4 py-2">
                      <TabList className="d-flex align-items-center gap-3 mb-5">
                        <Tab as={Fragment} key={tabList[0]}>
                          {({ selected }) => (
                            <>
                              <CustomTabButton
                                tabName={tabList[0]}
                                selected={selected}
                                index={0}
                                setSelectedTab={() => {}}
                              />
                            </>
                          )}
                        </Tab>
                        <Tab as={Fragment} key={tabList[1]}>
                          {({ selected }) => (
                            <CustomTabButton
                              tabName={tabList[1]}
                              selected={selected}
                              index={1}
                              href="/seating-plan"
                            />
                          )}
                        </Tab>
                      </TabList>
                      <TabPanels>
                        <TabPanel>
                          <DesignZoningAndCapacityManually
                            values={values}
                            errors={errors}
                            handleOnChange={(field, value) =>
                              _handleOnChange(field, value, setFieldValue)
                            }
                            touched={touched}
                            setZoneDesignData={setZoneDesignData}
                            zoneDesignData={zoneDesignData}
                          />
                          <div className="col-12 px-0">
                            <div className="row">
                              <div className="col-12 pe-0">
                                <div className="float-end mb-7">
                                  <ButtonPrimary
                                    type="submit"
                                    onClick={submitForm}
                                    className="btn"
                                  >
                                    <PlusIcon className="w-4 h-4 me-3 mb-1px" />
                                    Add Section
                                  </ButtonPrimary>
                                </div>
                              </div>
                            </div>
                          </div>
                        </TabPanel>
                        <TabPanel></TabPanel>
                      </TabPanels>
                    </TabGroup> */}
                    {isSeparateUrl ? (
                      <></>
                    ) : (
                      <>
                        <div className="mt-6">
                          <Accordion className="panel-default d-flex flex-column gap-4">
                            {tableData?.map(
                              (
                                item: IAddListingAddZoningAndCapacity,
                                index: number
                              ) => (
                                <>
                                  <ZoningAccordion
                                    item={item}
                                    index={`${index}`}
                                    status={
                                      index % 2 === 0 ? "active" : "in-active"
                                    }
                                  />
                                </>
                              )
                            )}
                          </Accordion>
                        </div>
                        {/* <div className="col-12">
                          <ZoningAndCapacityTable
                            setTableData={setTableData}
                            tableData={tableData}
                          />
                        </div> */}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Formik>
    </>
  );
};

export default AddZoningAndCapacity;
