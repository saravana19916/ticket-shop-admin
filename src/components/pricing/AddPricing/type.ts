export interface IPricingDetailsProps {
  id: number;
  productDetails: {
    productName: string;
    productType: string;
    productCategory: string;
    productSubCategory: string;
    productSubTitle: string;
    img: any;
    description?: string;
  };
  rulesAndTimeline: {
    minOrder: undefined | string;
    maxOrder: undefined | string;
    access: undefined | string;
    scan: undefined | string;
    salesStartDate: undefined | string | Date;
    salesEndDate: undefined | string | Date;
  };
  pricing: {
    netSalesPrice: number | undefined;
    transactionCurrency: string | undefined;
    vatTax: number | undefined | string;
    entertainmentTax: number | undefined | string;
    municipalTax: number | undefined | string;
    otherTax: number | undefined | string;
  };

  inclusion: {
    inclusionText?: string | undefined;
    inclusionList: string[];
  };
}

// zoningAndAllocation: {
//   zone: undefined | string;
//   floor: undefined | string;
//   section: undefined | string;
//   row: undefined | string;
//   totalCapacity: undefined | string;
//   blocked: undefined | string;
//   onSaleCap: undefined | string;
// };
