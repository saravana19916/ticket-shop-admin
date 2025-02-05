import React, { Dispatch, FC, SetStateAction, useState } from "react";
import { pricingDetailsData } from "../../../../commondata/pricingTableData";
import AccordionTable from "../../../shared/CustomAccordionTable/AccordionTable";
import { toast } from "react-toastify";
import { IPricingDetailsProps } from "../../../pricing/AddPricing/type";
import AccordionTableBodyRowColumn, {
  DATE_FORMAT_1,
} from "../../../shared/AccordionTableBodyRowColumn";
interface IProps {
  tableData: IPricingDetailsProps[];
  handleRemove: (id: number | string) => void;
  handleDuplicated: (id: number | string) => void;
  handleEdit: (id: number | string) => void;
}

const PricingTable: FC<IProps> = ({
  tableData,
  handleRemove,
  handleDuplicated,
  handleEdit,
}) => {
  const _handleSelectAccordion = (id: number) => {
    setAccordionId((prev) => {
      return id === prev ? null : id;
    });
  };
  const [accordionId, setAccordionId] = useState<number | string | null>(null);

  const _getAccordionBody = (l: IPricingDetailsProps) => {
    return (
      <>
        <div className="accordion-body pt-6">
          <div className="row ms-6">
            <AccordionTableBodyRowColumn
              data={[
                {
                  title: "Product Name",
                  value: l.productDetails?.productName,
                },
                {
                  title: "Subtitle",
                  value: l.productDetails?.productSubTitle,
                },
                {
                  title: "Type",
                  value: l.productDetails?.productType,
                },
                {
                  title: "Category",
                  value: l.productDetails?.productCategory,
                },
                {
                  title: "Sub Category",
                  value: l.productDetails?.productSubCategory,
                },
                {
                  title: "Description",
                  value: l.productDetails?.description,
                },
                {
                  title: "Net Price",
                  value: l.pricing?.netSalesPrice,
                },
                {
                  title: "Currency",
                  value: l.pricing?.transactionCurrency,
                },
                {
                  title: "VAT",
                  value: l.pricing?.vatTax,
                  suffix: "%",
                },
                {
                  title: "Ent Tax",
                  value: l.pricing?.entertainmentTax,
                  suffix: "%",
                },
                {
                  title: "City Tax",
                  value: l.pricing?.municipalTax,
                  suffix: "%",
                },
                {
                  title: "Other Tax",
                  value: l.pricing?.otherTax,
                  suffix: "%",
                },
                {
                  title: "Min Order",
                  value: l.rulesAndTimeline?.minOrder,
                },
                {
                  title: "Max Order",
                  value: l.rulesAndTimeline?.maxOrder,
                },
                {
                  title: "Access",
                  value: l.rulesAndTimeline?.access,
                },
                {
                  title: "Scan",
                  value: l.rulesAndTimeline?.scan,
                },
                {
                  title: "Sales Start",
                  value: l.rulesAndTimeline?.salesStartDate,
                  dateFormat: DATE_FORMAT_1,
                },
                {
                  title: "Sales End",
                  value: l.rulesAndTimeline?.salesEndDate,
                  dateFormat: DATE_FORMAT_1,
                },
              ]}
            />
            <div className="col-12">
              <span className="text-color-gray-1 d-inline-block mb-3">
                Inclusion
              </span>
              <div className="d-flex flex-wrap gap-3">
                {l.inclusion?.inclusionList?.map((l: string) => (
                  <>
                    <div className="col-auto p-2 px-5 rounded-pill inclusion-bg-light-gray-1 fs-12px">
                      <span className="d-inline-block ms-2 me-2">{l}</span>
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
        accordionName={"pricingDataAccordion"}
        selectedAccordionId={accordionId}
        handleSelectAccordion={_handleSelectAccordion}
        setAccordionId={setAccordionId}
        remove={true}
        edit={true}
        duplicate={true}
        data={tableData?.map((l: IPricingDetailsProps) => {
          return {
            id: l.id,
            title: l.productDetails?.productName,
            subTitle: l.productDetails?.productSubTitle,
            tag: l.productDetails?.productType,
            accordionBody: _getAccordionBody(l),
          };
        })}
        handleDuplicated={handleDuplicated}
        handleRemove={handleRemove}
        handleEdit={handleEdit}
      />
    </>
  );
};

export default PricingTable;
