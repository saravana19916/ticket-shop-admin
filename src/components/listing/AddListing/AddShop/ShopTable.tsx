import React, { Dispatch, FC, SetStateAction, useState } from "react";
import { shopTableData } from "../../../../commondata/shopTableData";
import {
  IShopTableProductsProps,
  IShopTableDataProps,
} from "../../../../commondata/shopTableData";
import AccordionTable from "../../../shared/CustomAccordionTable/AccordionTable";
import { toast } from "react-toastify";
import { IAddListingShopProps } from "./type";
interface IShopTableProps {
  tableData: IAddListingShopProps[];
  setTableData: Dispatch<SetStateAction<IAddListingShopProps[]>>;
  handleEdit: (id: number | string) => void;
}
const ShopTable: FC<IShopTableProps> = ({
  tableData,
  setTableData,
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
    const newData = tableData?.filter((i: IAddListingShopProps) => i.id !== id);
    setTableData(newData);
    toast.success("Removed successfully");
  };

  const handleDuplicated = (id: number | string) => {
    const duplicateData: IAddListingShopProps | undefined = tableData?.find(
      (i: IAddListingShopProps) => i.id === id
    );

    if (duplicateData) {
      const newData = {
        ...duplicateData,
        id: dataIndex,
      };
      setTableData([...tableData, newData]);
      toast.success("Duplicated successfully");
    }
  };
  const _getAccordionBody = (l: IAddListingShopProps) => {
    return (
      <>
        <div className="accordion-body ps-0 pb-0">
          <div className="row mt-3 p-0">
            <div className="col-12 table-responsive p-0">
              <table className="table table-borderless text-nowrap">
                <thead className="border-0">
                  <tr>
                    <th></th>
                    <th className="text-capitalize text-end fs-12px text-color-gray-1">
                      Unit
                    </th>
                    <th></th>
                    <th className="text-capitalize fs-12px text-color-gray-1">
                      Product Name
                    </th>
                    <th className="text-capitalize fs-12px text-color-gray-1">
                      Type
                    </th>
                    <th className="text-capitalize fs-12px text-color-gray-1">
                      Country
                    </th>
                    <th className="text-capitalize fs-12px text-color-gray-1">
                      City
                    </th>
                    <th className="text-capitalize fs-12px text-color-gray-1">
                      Allocation
                    </th>
                    <th className="text-capitalize fs-12px text-color-gray-1">
                      Discount &#37;
                    </th>
                    {/* <th className="text-capitalize fs-12px text-color-gray-1">
                      Svc Fee
                    </th>
                    <th className="text-capitalize fs-12px text-color-gray-1">
                      Comm (&#37;)
                    </th> */}
                  </tr>
                </thead>
                <tbody className="border-0">
                  <tr className="d-flex mb-2"></tr>
                  {l.productAllocation?.map(
                    (productAllocation, index: number) => (
                      <>
                        <tr
                          key={index + 5 * Math.random() * 100}
                          className={`${
                            l.productAllocation.length - 1 === index
                              ? ""
                              : "border-bottom"
                          }`}
                        >
                          <td></td>
                          <td className="text-end fw-600">{index + 1}</td>
                          <td></td>
                          <td className="text-start fw-600">
                            {productAllocation.product}
                          </td>
                          <td className="text-start">
                            {productAllocation.product}
                          </td>
                          <td className="text-start">
                            {l?.shopInformation.country}
                          </td>
                          <td className="text-start">
                            {l?.shopInformation.city}
                          </td>
                          <td className="text-start">
                            {productAllocation.allocationUnit} (
                            {productAllocation.allocation} &#37;)
                          </td>
                          <td className="text-start">
                            {productAllocation?.discountPercentage}&#37;
                          </td>
                          {/* <td className="text-start">{product.svcFee}</td>
                          <td className="text-start">
                            {product.commPercentage}&#37;
                          </td> */}
                        </tr>
                      </>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <AccordionTable
        accordionName={"shopDataAccordion"}
        data={tableData?.map((l: IAddListingShopProps) => {
          return {
            id: l.id,
            title: l.shopInformation?.shopName,
            subTitle: l.shopInformation?.shopCode,
            tag: `${l.productAllocation?.length} ${
              l.productAllocation?.length === 1 ? "Product" : "Products"
            }`,
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

export default ShopTable;
