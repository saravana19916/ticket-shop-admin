import React, { FC } from "react";
import NotAvailableComponent from "./NotAvailableComponent";
import moment from "moment";

const AccordionTableBodyRowColumn: FC<IProps> = ({ data }) => {
  const _getValue = (d: IData) => {
    if (d.dateFormat) {
      return moment(d.value).format(d.dateFormat);
    } else if (d.color) {
      <span
        className="w-4 h-5 rounded"
        style={{
          backgroundColor: d.color,
        }}
      ></span>;
    } else {
      return `${d.prefix || ""} ${d.value} ${d.suffix || ""}`;
    }
  };
  return (
    <>
      {data?.map((d) => (
        <>
          <div
            className={`col-md-4 col-sm-6 mb-5 ${
              d.colSize ? d.colSize : "col-lg-2 "
            }`}
          >
            <div className="fs-12px d-flex flex-column gap-1">
              <span
                className="text-color-gray-1"
                title={d.value ? _getValue(d) : ""}
              >
                {d.title}
              </span>
              <span className="fw-600 fs-14px w-100 text-truncate">
                {d.value ? _getValue(d) : <NotAvailableComponent />}
              </span>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default AccordionTableBodyRowColumn;

//TYPES

interface IProps {
  data: IData[];
}
interface IData {
  title: string;
  value: string | null | number | undefined | Date;
  suffix?: string;
  prefix?: string;
  dateFormat?:
    | "DD/MM/YYYY"
    | "DD.MM.YY"
    | "DD.MM.YY HH:MM"
    | "DD/MM/YYYY HH:MM";
  colSize?: string;
  color?: string;
}

export const DATE_FORMAT_1 = "DD/MM/YYYY";
export const DATE_FORMAT_2 = "DD.MM.YY";
export const DATE_TIME_FORMAT_1 = "DD/MM/YYYY HH:MM";
export const DATE_TIME_FORMAT_2 = "DD.MM.YY HH:MM";
