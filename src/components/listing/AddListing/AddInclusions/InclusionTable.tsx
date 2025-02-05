import React, { FC, useState } from "react";
import AccordionTable from "../../../shared/CustomAccordionTable/AccordionTable";
import { toast } from "react-toastify";
import { IInclusionProps } from "./type";
interface IInclusionTable {
  tableData: any;
  setTableData: any;
  setEdit: (id: number | string) => void;
}
const InclusionTable: FC<IInclusionTable> = ({
  tableData,
  setTableData,
  setEdit,
}) => {
  const _handleSelectAccordion = (id: number) => {
    setAccordionId((prev) => {
      return id === prev ? 0 : id;
    });
  };
  const [accordionId, setAccordionId] = useState(1);
  const dataIndex = tableData?.length + 1;

  const handleDataRemove = (id: number | string) => {
    const newData = tableData?.filter((i: IInclusionProps) => i.id !== id);
    setTableData(newData);
    toast.success("Removed successfully");
  };

  const handleDuplicated = (id: number | string) => {
    const duplicateData = tableData?.find((i: IInclusionProps) => i.id === id);

    const newData = {
      ...duplicateData,
      id: dataIndex,
    };
    setTableData([...tableData, newData]);
    toast.success("Duplicated successfully");
  };
  const _getAccordionBody = (l: IInclusionProps) => {
    return (
      <>
        <div className="accordion-body">
          <div className="row mt-5 ms-6 mb-6">
            <div className="col-12">
              <div className="d-flex flex-wrap gap-3">
                {l.inclusionList?.map((l: string) => (
                  <>
                    <div className="col-auto p-2 px-5 rounded-pill d-flex gap-5 bg-color-light-gray-3">
                      <span className="d-inline-block me-5">{l}</span>
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
        accordionName={"inclusionDataAccordion"}
        selectedAccordionId={accordionId}
        handleSelectAccordion={_handleSelectAccordion}
        setAccordionId={setAccordionId}
        remove={true}
        edit={true}
        duplicate={true}
        data={tableData?.map((l: IInclusionProps) => {
          return {
            id: l.id,
            title: (l.product ?? []).join(", "),
            subTitle: l.subtitle,
            tag: `${l.inclusionList.length} inclusions`,
            accordionBody: _getAccordionBody(l),
          };
        })}
        handleDuplicated={handleDuplicated}
        handleRemove={handleDataRemove}
        handleEdit={setEdit}
      />
    </>
  );
};

export default InclusionTable;
