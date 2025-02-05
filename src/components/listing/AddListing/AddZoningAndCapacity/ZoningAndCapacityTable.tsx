import React, { Dispatch, FC, useState } from "react";
import AccordionTable from "../../../shared/CustomAccordionTable/AccordionTable";
import { toast } from "react-toastify";
import { IAddListingAddZoningAndCapacity } from "./type";
import AccordionTableBodyRowColumn from "../../../shared/AccordionTableBodyRowColumn";
interface IProps {
  tableData: IAddListingAddZoningAndCapacity[];
  setTableData: Dispatch<any>;
}
const ZoningAndCapacityTable: FC<IProps> = ({ tableData, setTableData }) => {
  const _handleSelectAccordion = (id: number) => {
    setAccordionId((prev) => {
      return id === prev ? null : id;
    });
  };
  const [accordionId, setAccordionId] = useState<number | string | null>(null);
  let dataIndex = tableData[tableData?.length - 1]?.id;
  dataIndex = dataIndex ? dataIndex + 1 : Math.round(Math.random() * 98) + 1;

  const handleDataRemove = (id: number | string) => {
    const newData = tableData?.filter(
      (i: IAddListingAddZoningAndCapacity) => i.id !== id
    );
    setTableData(newData);
    toast.success("Removed successfully");
  };

  const handleDuplicated = (id: number | string) => {
    const duplicateData = tableData?.find(
      (i: IAddListingAddZoningAndCapacity) => i.id === id
    );

    const newData = {
      ...duplicateData,
      id: dataIndex,
    };
    setTableData([...tableData, newData]);
    toast.success("Duplicated successfully");
  };
  const _getAccordionBody = (l: IAddListingAddZoningAndCapacity) => {
    return (
      <>
        <div className="accordion-body pt-6">
          <div className="row ms-lg-6 ps-lg-6">
            <AccordionTableBodyRowColumn
              data={[
                {
                  title: "Zone Name",
                  value: l.zones?.zoneName,
                },
                {
                  title: "Format",
                  value: l.zones?.zoneFormat,
                },
                {
                  title: "Type",
                  value: l.zones?.zoneType,
                },
                {
                  title: "Selection",
                  value: l.zones?.zoneSelection,
                  colSize: "col-lg-4",
                },
                {
                  title: "Color",
                  value: l.zones?.zoneColor,
                  // color: l.zones?.zoneColor,
                },
                ...l.zoneDesign?.map((l) => {
                  return {
                    title: l.label || "(add)",
                    value: l.value,
                  };
                }),
                {
                  title: "Capacity",
                  value: l.capacity?.totalCapacity,
                },
                {
                  title: "Blocked",
                  value: l.capacity?.blocked,
                },
                {
                  title: "On Sale",
                  value: l.capacity?.totalOnSale,
                },
                {
                  title: "Numbering",
                  value: l.seats?.rangeFrom
                    ? `${l.seats?.rangeFrom} ${
                        l.seats?.rangeUpTo ? `- ${l.seats?.rangeUpTo}` : ""
                      }`
                    : undefined,
                },
                {
                  title: "Order",
                  value: l.seats?.order,
                },
                {
                  title: "Blocked Seats",
                  value: l.seats?.blockedSeats?.join(", "),
                },
              ]}
            />
            <div className="col-12">
              <span className="text-color-gray-1 d-inline-block mb-3">
                Products
              </span>
              <div className="d-flex flex-wrap gap-3">
                {l.seats?.connectedProducts?.map((l: string) => (
                  <>
                    <div className="col-auto p-2 px-5 rounded-pill inclusion-bg-light-gray-1 fs-12px">
                      <span className="d-inline-block me-2 ms-2">{l}</span>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <AccordionTable
        accordionName="zoningAndCapacityAccordion"
        data={tableData?.map((l: IAddListingAddZoningAndCapacity) => {
          return {
            id: l.id || new Date().toISOString(),
            title: "Product Name",
            subTitle: "Subtitle",
            accordionBody: _getAccordionBody(l),
            tag: "Product Type",
          };
        })}
        selectedAccordionId={accordionId}
        handleSelectAccordion={_handleSelectAccordion}
        setAccordionId={setAccordionId}
        remove={true}
        edit={true}
        duplicate={true}
        handleRemove={handleDataRemove}
        handleDuplicated={handleDuplicated}
      />
    </>
  );
};

export default ZoningAndCapacityTable;
