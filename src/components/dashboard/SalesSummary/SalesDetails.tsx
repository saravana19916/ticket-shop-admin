import React, { FC, useEffect, useState } from "react";
import { Badge, Card, Table } from "react-bootstrap";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import SalesSummaryByProduct from "./SalesSummaryByProduct";
import {
  IPaymentType,
  ISalesByLocation,
  ISalesByProduct,
  ISalesByTime,
  ISalesSummary,
} from "../../../service/dashboard-sales-summary.service";
import { roundToNearestWhole } from "../../../utils/helpers";
import SalesByTime from "./SalesByTime";
import SalesByProduct from "./SalesByProduct";
import SalesByPaymentType from "./SalesByPaymentType";
import SalesByLocations from "./SalesByLocations";
import SalesByGuestList from "./SalesByGuestList";
interface ISalesDetailsProps {
  salesByProduct: ISalesByProduct[] | undefined;
  salesByLocation: ISalesByLocation[] | undefined;
  salesByPayment: IPaymentType[] | undefined;
  salesByTime: ISalesByTime[] | undefined;
  activeCurrency: any;
  salesSummary: ISalesSummary[] | undefined;
}

const SalesDetails: FC<ISalesDetailsProps> = ({
  salesByLocation,
  salesByProduct,
  salesByTime,
  activeCurrency,
  salesByPayment,
  salesSummary,
}) => {
  return (
    <>
      <SalesByGuestList activeCurrency={activeCurrency} />
      <SalesByLocations
        activeCurrency={activeCurrency}
        salesByLocation={salesByLocation}
      />
      <SalesByProduct
        activeCurrency={activeCurrency}
        salesByProduct={salesByProduct}
      />
      <SalesByTime salesByTime={salesByTime} activeCurrency={activeCurrency} />

      <SalesByPaymentType
        activeCurrency={activeCurrency}
        salesByPaymentType={salesByPayment}
      />
      <SalesSummaryByProduct salesSummary={salesSummary} />
    </>
  );
};

export default SalesDetails;
