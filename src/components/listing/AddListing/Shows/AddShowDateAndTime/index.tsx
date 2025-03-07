import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { FC, useEffect, useState } from "react";
interface IAddListingPageOneProps {}
import { Accordion, Form } from "react-bootstrap";
import {
  IShowDateAndTimeSectionProps,
  showDateAndTimeSectionData,
} from "../../../../../commondata/showDateAndTime";
import EventPeriod from "./EventPeriod";
import EventsDateAndShowTimes from "./EventsDateAndShowTimes";
import AccordionTable from "../../../../shared/CustomAccordionTable/AccordionTable";
import { toast } from "react-toastify";
import { Formik, Form as FormikForm, FormikErrors } from "formik";
import {
  addShowDateTimeInitialValues,
  IAddShowDateTimeProps,
  addShowDateTimeValidationSchema,
} from "./helper";
import moment from "moment";
import GeneralInfo from "./GeneralInfo";
import Intermission from "./Intermission";
import ShowDateAndTimeAccordion from "./ShowDateAndTimeAccordion";
import "../../../../guestList/guest-list.css";
import { ButtonPrimary } from "../../../../styledComponents/styledButton";

const AddListingPageOne: FC<IAddListingPageOneProps> = ({}) => {
  const isAddListingLocation = window.location?.pathname === "/add-listing";

  const [date, setDate] = useState([]);
  const [editEventId, setEditEventId] = useState<number | string | null>(null);
  const [initialValue, setInitialValue] = useState<IAddShowDateTimeProps>(
    addShowDateTimeInitialValues
  );
  const [dataList, setDataList] = useState<any>([]);
  const _handleSelectAccordion = (id: number) => {
    setAccordionId((prev) => {
      return id === prev ? null : id;
    });
  };
  const [accordionId, setAccordionId] = useState<number | string | null>(null);
  const _handleCount = (
    value: "numberOfEvents" | "numberOfEventDays",
    type: "plus" | "minus",
    previousValue: number,
    setFieldValue: (
      field: string,
      value: any,
      shouldValidate?: boolean | undefined
    ) => Promise<void | FormikErrors<IAddShowDateTimeProps>>
  ) => {
    if (value === "numberOfEventDays") {
      if (type === "plus") {
        setFieldValue("numberOfEventDays", previousValue + 1);
      } else {
        setFieldValue("numberOfEventDays", Math.max(previousValue - 1, 0));
      }
    } else {
      if (type === "plus") {
        setFieldValue("numberOfEvents", previousValue + 1);
      } else {
        setFieldValue("numberOfEvents", Math.max(previousValue - 1, 0));
      }
    }
  };

  useEffect(() => {
    setDataList(showDateAndTimeSectionData);
  }, []);
  const dataIndex = dataList[dataList.length - 1]?.id + 1;

  const handleRemove = (id: number | string) => {
    const updateList = dataList?.filter(
      (item: IShowDateAndTimeSectionProps) => item.id !== id
    );
    setDataList(updateList);
    toast.success("Show details removed successfully");
  };
  const isSeparateUrl =
    window.location?.pathname === "/add-show" ||
    window.location?.pathname.startsWith("/edit-show/");
  const handleDuplicate = (l: number | string) => {
    const duplicateData = dataList?.find(
      (item: IShowDateAndTimeSectionProps) => item.id === l
    );

    const data = {
      ...duplicateData,
      id: dataIndex,
    };
    setDataList([...dataList, data]);
    toast.success("Show details duplicated successfully");
  };
  const formatEventDateTime = (eventDate: string, time: string) => {
    return moment(`${eventDate} ${time}`, "DD-MM-YYYY HH:mm").toDate();
  };
  const handleEdit = (id: number | string) => {
    const editData = dataList?.find(
      (item: IShowDateAndTimeSectionProps) => item.id == id
    );
    if (editData) {
      const eventDate = moment(editData.eventDate).format("DD-MM-YYYY");
      const showTime = formatEventDateTime(eventDate, editData.showTime);
      const doorOpen = formatEventDateTime(eventDate, editData.doorOpen);
      const eventEnd = formatEventDateTime(eventDate, editData.eventEnd);
      const data: IAddShowDateTimeProps = {
        ...editData,
        showTime,
        doorOpen,
        eventEnd,
        date: [],
      };
      setInitialValue(data);
      setEditEventId(id);
      document?.getElementById("dateAndShowTimeForm")?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const _getAccordionBody = (l: IShowDateAndTimeSectionProps) => {
    return (
      <>
        <div className="accordion-body pt-6 overflow-auto">
          <div className="row ms-6 ps-5">
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="d-flex flex-column gap-1">
                <span className="fs-12px text-color-gray-1">Show Date</span>
                <span className="fw-600 fs-14px">
                  {l.eventDate ? moment(l.eventDate)?.format("DD.MM.YYYY") : ""}
                </span>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="d-flex flex-column gap-1">
                <span className="fs-12px text-color-gray-1">Show time</span>
                <span className="fw-600 fs-14px">{l.showTime}</span>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="d-flex flex-column gap-1">
                <span className="fs-12px text-color-gray-1">
                  Show duration(mins)
                </span>
                <span className="fw-600 fs-14px">{l.showDuration}</span>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="d-flex flex-column gap-1">
                <span className="fs-12px text-color-gray-1">
                  Intermission duration (mins)
                </span>
                <span className="fw-600 fs-14px">{l.intermissionDuration}</span>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="d-flex flex-column gap-1">
                <span className="fs-12px text-color-gray-1">Door open</span>
                <span className="fw-600 fs-14px">{l.doorOpen}</span>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="d-flex flex-column gap-1">
                <span className="fs-12px text-color-gray-1">Event End</span>
                <span className="fw-600 fs-14px">{l.eventEnd}</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div
        className={`row px-0 px-md-2 px-lg-4 px-xl-6 mx-xl-3 mx-0 mx-md-1 mx-lg-3 ${
          isSeparateUrl ? "mt-7" : ""
        }`}
      >
        <div className="card border p-4 rounded-16px">
          <div className="p-0 p-md-5">
            <div className="row">
              <Formik
                initialValues={initialValue}
                enableReinitialize
                onSubmit={(values, { resetForm }) => {
                  if (editEventId) {
                    const data = {
                      id: values.id,
                      eventDate: values?.eventDate,
                      showTime: moment(values?.showTime).format("hh:mm"),
                      showDuration: values.showDuration,
                      intermissionDuration: values.intermissionDuration,
                      doorOpen: moment(values?.doorOpen).format("hh:mm"),
                      eventEnd: moment(values?.eventEnd).format("hh:mm"),
                      numberOfEventDays: values.numberOfEventDays,
                      numberOfEvents: values?.numberOfEvents,
                    };
                    const updatedDataList = dataList.map((item: any) =>
                      item.id === data.id ? data : item
                    );
                    setDataList(updatedDataList);

                    setEditEventId(null);
                    setInitialValue(addShowDateTimeInitialValues);
                  } else {
                    const data = {
                      id: dataIndex,
                      eventDate: values?.eventDate,
                      showTime: moment(values?.showTime).format("hh:mm"),
                      showDuration: values.showDuration,
                      intermissionDuration: values.intermissionDuration,
                      doorOpen: moment(values?.doorOpen).format("hh:mm"),
                      eventEnd: moment(values?.eventEnd).format("hh:mm"),
                      numberOfEventDays: values.numberOfEventDays,
                      numberOfEvents: values?.numberOfEvents,
                    };
                    setDataList([...dataList, data]);
                  }
                  resetForm();
                }}
                validationSchema={addShowDateTimeValidationSchema}
              >
                {({ setFieldValue, values, errors, touched }) => (
                  <>
                    <div className="col-12 mb-3">
                      <p className="fw-600 fs-26px text-black mb-3">
                        Dates & Show Times
                      </p>
                    </div>
                    <FormikForm className="mb-5 p-0" id="dateAndShowTimeForm">
                      <GeneralInfo />
                      <Intermission />
                      <div className="col-12">
                        <div className="float-end mb-7">
                          <ButtonPrimary
                            type="submit"
                            className="btn "
                            style={{ minWidth: "118px" }}
                          >
                            Add
                          </ButtonPrimary>
                        </div>
                      </div>
                      <div className="col-12 mb-6 d-none">
                        <Form.Group>
                          <Form.Label className="fs-5 fw-500 text-black">
                            General Info
                          </Form.Label>
                          <span className="text-gray d-block mb-3 fs-12px">
                            in this section, you can set the date and time of
                            your show.
                          </span>
                          <div className="row gap-3">
                            <div className="col-xxl-3 col-xl-4 col-lg-5 col-md-6 col-12">
                              <Form.Label className="mb-3 fs-6">
                                Number of Event days
                              </Form.Label>
                              <div className="badge-pill rounded-pill text-dark border fs-6 fw-500 d-flex gap-5 justify-content-center align-items-center form-control-border-color">
                                <button type="button" className="btn border-0">
                                  <MinusIcon
                                    className="w-4 h-4 text-black"
                                    onClick={() =>
                                      _handleCount(
                                        "numberOfEventDays",
                                        "minus",
                                        values?.numberOfEventDays,
                                        setFieldValue
                                      )
                                    }
                                  />
                                </button>
                                <span className="fs-5">
                                  {values?.numberOfEventDays}
                                </span>
                                <button type="button" className="btn border-0">
                                  <PlusIcon
                                    className="w-4 h-4 text-black"
                                    onClick={() =>
                                      _handleCount(
                                        "numberOfEventDays",
                                        "plus",
                                        values?.numberOfEventDays,
                                        setFieldValue
                                      )
                                    }
                                  />
                                </button>
                              </div>
                              {errors &&
                                errors?.numberOfEventDays &&
                                touched &&
                                touched?.numberOfEventDays && (
                                  <>
                                    <span className="text-danger d-inline-block ms-3 mt-2">
                                      {errors?.numberOfEventDays}
                                    </span>
                                  </>
                                )}
                            </div>
                            <div className="col-xxl-3 col-xl-4 col-lg-5 col-md-5 col-12">
                              <Form.Label className="mb-3 fs-6">
                                Number of Events
                              </Form.Label>
                              <div className="badge-pill rounded-pill text-dark border fs-5 fw-500 d-flex gap-5 justify-content-center align-items-center form-control-border-color">
                                <button type="button" className="btn border-0">
                                  <MinusIcon
                                    className="w-4 h-4 text-black"
                                    onClick={() =>
                                      _handleCount(
                                        "numberOfEvents",
                                        "minus",
                                        values?.numberOfEvents,
                                        setFieldValue
                                      )
                                    }
                                  />
                                </button>
                                <span className="fs-5">
                                  {values.numberOfEvents}
                                </span>
                                <button type="button" className="btn border-0">
                                  <PlusIcon
                                    className="w-4 h-4 text-black"
                                    onClick={() =>
                                      _handleCount(
                                        "numberOfEvents",
                                        "plus",
                                        values?.numberOfEvents,
                                        setFieldValue
                                      )
                                    }
                                  />
                                </button>
                              </div>
                              {errors &&
                                errors?.numberOfEvents &&
                                touched &&
                                touched?.numberOfEvents && (
                                  <>
                                    <span className="text-danger d-inline-block mt-2 ms-3">
                                      {errors?.numberOfEvents}
                                    </span>
                                  </>
                                )}
                            </div>
                          </div>
                        </Form.Group>
                      </div>
                      {/* <EventPeriod setDate={setDate} /> */}
                      {/* <EventsDateAndShowTimes
                        date={date}
                        dataList={dataList}
                        errors={errors}
                        values={values}
                        setFieldValue={setFieldValue}
                        touched={touched}
                        editEventId={editEventId}
                      /> */}
                    </FormikForm>
                  </>
                )}
              </Formik>
              {isSeparateUrl ? (
                <></>
              ) : (
                <>
                  <div className="mt-6">
                    <Accordion className="panel-default d-flex flex-column gap-4">
                      {dataList?.map(
                        (item: IShowDateAndTimeSectionProps, index: number) => (
                          <>
                            <ShowDateAndTimeAccordion
                              item={item}
                              index={`${index}`}
                              status={index % 2 === 0 ? "active" : "in-active"}
                            />
                          </>
                        )
                      )}
                    </Accordion>
                  </div>
                  {/* <AccordionTable
                    accordionName="showTableAccordion"
                    data={dataList?.map((l: IShowDateAndTimeSectionProps) => {
                      return {
                        id: l.id,
                        title: `Show ${l.id}`,
                        accordionBody: _getAccordionBody(l),
                      };
                    })}
                    selectedAccordionId={accordionId}
                    handleSelectAccordion={_handleSelectAccordion}
                    setAccordionId={setAccordionId}
                    remove={true}
                    edit={true}
                    duplicate={true}
                    handleRemove={handleRemove}
                    handleDuplicated={handleDuplicate}
                    handleEdit={handleEdit}
                  /> */}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddListingPageOne;
