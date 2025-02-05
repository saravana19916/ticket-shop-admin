export interface IDynamicPricingStrategyProps {
  id: number;
  strategyType: "By Demand" | "By Date";
  byDate?: IByDateDynamicPricingStrategyProps;
  byDemand?: IByDemandDynamicPricingStrategyProps;
}
interface IByDateDynamicPricingStrategyProps {
  startDate: string | Date | undefined;
  endDate: string | Date | undefined;
  pricingAction: string;
  pricingActionValue: number;
  pricingActionPrice: number;
  capacityAction: string;
  capacityActionValue: number;
  capacityActionUnit: number;
  products: string[];
  shops: string[];
  strategyName: string;
}
interface IByDemandDynamicPricingStrategyProps {
  section: string;
  exceedBy: string;
  sectionValue: number;
  sectionUnit: number;
  pricingAction: string;
  pricingActionValue: number;
  pricingActionPrice: number;
  dateAndTime: Date | string | null | undefined;
  products: string[];
  shops: string[];
  strategyName: string;
}
