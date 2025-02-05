import React, { FC, useState } from "react";
import AccordionTable from "../../../shared/CustomAccordionTable/AccordionTable";
import {
  IPoliciesTableDataProps,
  policiesTableData,
} from "../../../../commondata/policiesData";
import { toast } from "react-toastify";
interface IPoliciesTable {
  tableData: IPoliciesTableDataProps[];
  setTableData: any;
}

const PoliciesTable: FC<IPoliciesTable> = ({ tableData, setTableData }) => {
  const _handleSelectAccordion = (id: number) => {
    setAccordionId((prev) => {
      return id === prev ? 0 : id;
    });
  };
  const [accordionId, setAccordionId] = useState(1);

  const dataIndex = tableData?.length + 1;

  const handleDataRemove = (id: number | string) => {
    const newData = tableData?.filter(
      (i: IPoliciesTableDataProps) => i.id !== id
    );
    setTableData(newData);
    toast.success("Removed successfully");
  };

  const handleDuplicated = (id: number | string) => {
    const duplicateData = tableData?.find(
      (i: IPoliciesTableDataProps) => i.id === id
    );

    const newData = {
      ...duplicateData,
      id: dataIndex,
    };
    setTableData([...tableData, newData]);
    toast.success("Duplicated successfully");
  };
  const _getAccordionBody = (l: string[]) => {
    return (
      <>
        <div className="accordion-body ps-0 pb-0">
          <div className="row mt-3 ms-6 p-0">
            <div className="col-12 text-wrap">
              <ol>
                {l.map((policy: string) => (
                  <>
                    <li className="mb-3">{policy}</li>
                  </>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <AccordionTable
        accordionName={"policiesAccordion"}
        data={tableData?.map((l: IPoliciesTableDataProps) => {
          return {
            id: l.id,
            title: l.policyName,
            accordionBody: _getAccordionBody(l.policiesList),
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
      />
    </>
  );
};

export default PoliciesTable;
