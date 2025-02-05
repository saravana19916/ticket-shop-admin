import React, { Dispatch, FC, SetStateAction, useState } from "react";
import AccordionTable from "../../../shared/CustomAccordionTable/AccordionTable";
import { dynamicPricingStrategyTableData } from "../../../../commondata/dynamicPricingStrategy";
import { toast } from "react-toastify";
import { IDynamicPricingStrategyProps } from "./type";
import AccordionTableBodyRowColumn, {
  DATE_FORMAT_2,
  DATE_TIME_FORMAT_1,
  DATE_TIME_FORMAT_2,
} from "../../../shared/AccordionTableBodyRowColumn";
interface IDynamicPricingStrategyTableProps {
  setTableData: Dispatch<SetStateAction<IDynamicPricingStrategyProps[]>>;
  tableData: IDynamicPricingStrategyProps[];
  handleEdit: (id: number | string) => void;
}
const DynamicPricingStrategyTable: FC<IDynamicPricingStrategyTableProps> = ({
  setTableData,
  tableData,
  handleEdit,
}) => {
  const _handleSelectAccordion = (id: number) => {
    setAccordionId((prev) => {
      return id === prev ? null : id;
    });
  };
  const [accordionId, setAccordionId] = useState<number | string | null>(null);
  const dataIndex = tableData[tableData.length - 1]?.id + 1;

  const handleDataRemove = (id: number | string) => {
    const newData = tableData?.filter(
      (i: IDynamicPricingStrategyProps) => i.id !== id
    );
    setTableData(newData);
    toast.success("Dynamic Pricing Removed successfully");
  };

  const handleDuplicated = (id: number | string) => {
    const duplicateData: IDynamicPricingStrategyProps | undefined =
      tableData?.find((i: IDynamicPricingStrategyProps) => i.id === id);
    if (duplicateData) {
      const newData: IDynamicPricingStrategyProps = {
        ...duplicateData,
        id: dataIndex,
      };
      setTableData([...tableData, newData]);
      toast.success("Dynamic Pricing Duplicated successfully");
    }
  };

  const _getAccordionBody = (l: IDynamicPricingStrategyProps) => {
    return (
      <>
        <div className="accordion-body ps-0 pb-0">
          <div className="row ms-lg-6 ps-lg-6">
            {l.strategyType === "By Date" ? (
              <>
                <AccordionTableBodyRowColumn
                  data={[
                    {
                      title: "Start Date",
                      value: l.byDate?.startDate,
                      dateFormat: DATE_FORMAT_2,
                    },
                    {
                      title: "End Date",
                      value: l.byDate?.endDate,
                      dateFormat: DATE_FORMAT_2,
                    },
                    {
                      title: "Pricing Action",
                      value: l.byDate?.pricingAction,
                    },
                    {
                      title: "Value",
                      value: l.byDate?.pricingActionValue,
                    },
                    {
                      title: "Capacity Action",
                      value: l.byDate?.capacityActionValue,
                    },
                  ]}
                />
                <div className="col-12 mb-4">
                  <span className="text-color-gray-1 d-inline-block mb-3">
                    Products
                  </span>
                  <div className="d-flex flex-wrap gap-3">
                    {l?.byDate?.products?.map((l: string) => (
                      <>
                        <div className="col-auto p-2 px-5 rounded-pill inclusion-bg-light-gray-1">
                          <span className="d-inline-block me-2 ms-2">{l}</span>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
                <div className="col-12 mb-4">
                  <span className="text-color-gray-1 d-inline-block mb-3">
                    Shops
                  </span>
                  <div className="d-flex flex-wrap gap-3">
                    {l?.byDate?.shops?.map((l: string) => (
                      <>
                        <div className="col-auto p-2 px-5 rounded-pill inclusion-bg-light-gray-1">
                          <span className="d-inline-block me-2 ms-2">{l}</span>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                <AccordionTableBodyRowColumn
                  data={[
                    {
                      title: "Date",
                      value: l.byDemand?.dateAndTime,
                      dateFormat: DATE_TIME_FORMAT_2,
                      colSize: "col-lg-3",
                    },
                    {
                      title: "Section",
                      value: l.byDemand?.section
                        ? `Exceed by ${l.byDemand?.section}`
                        : undefined,
                    },
                    {
                      title: "Status",
                      value: l.byDemand?.exceedBy,
                    },
                    {
                      title: "Pricing Action",
                      value: l.byDemand?.pricingAction,
                    },
                    {
                      title: "Value",
                      value: l.byDemand?.pricingActionValue,
                    },
                  ]}
                />
                <div className="col-12 mb-4">
                  <span className="text-color-gray-1 d-inline-block mb-3">
                    Products
                  </span>
                  <div className="d-flex flex-wrap gap-3">
                    {l?.byDemand?.products?.map((l: string) => (
                      <>
                        <div className="col-auto p-2 px-5 rounded-pill inclusion-bg-light-gray-1">
                          <span className="d-inline-block me-2 ms-2">{l}</span>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
                <div className="col-12 mb-4">
                  <span className="text-color-gray-1 d-inline-block mb-3">
                    Shops
                  </span>
                  <div className="d-flex flex-wrap gap-3">
                    {l?.byDemand?.shops?.map((l: string) => (
                      <>
                        <div className="col-auto p-2 px-5 rounded-pill inclusion-bg-light-gray-1">
                          <span className="d-inline-block me-2 ms-2">{l}</span>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <AccordionTable
        accordionName={"dynamicPricingStrategy"}
        data={tableData?.map((l: IDynamicPricingStrategyProps) => {
          return {
            id: l.id,
            title:
              l.strategyType === "By Date"
                ? l.byDate?.strategyName || ""
                : l.byDemand?.strategyName || "",
            tag: l.strategyType,
            accordionBody: _getAccordionBody(l),
          };
        })}
        selectedAccordionId={accordionId}
        handleSelectAccordion={_handleSelectAccordion}
        setAccordionId={setAccordionId}
        remove={true}
        edit={true}
        duplicate={true}
        handleDuplicated={handleDuplicated}
        handleRemove={handleDataRemove}
        handleEdit={handleEdit}
      />
    </>
  );
};

export default DynamicPricingStrategyTable;
