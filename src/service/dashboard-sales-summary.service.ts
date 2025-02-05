import apiClient from "./axiosConfig";

export const fetchDashboardSalesHighlights = async (
  eventId: string | number
): Promise<FetchDashboardSalesHighlightsResponse> => {
  if (!eventId) throw new Error("Event ID is required.");
  const response = await apiClient.get<FetchDashboardSalesHighlightsResponse>(
    `/dashboard-sales-highlights/${eventId}`
  );
  return response.data;
};

// Define the types for each part of the response

export interface ISalesByLocation {
  name: string;
  unit: number;
  value: string;
}

export interface ISalesByProduct {
  name: string;
  type: string;
  percentage: string;
  capacity: number;
  sold: number;
  available: number;
  revenue: string;
}

export interface ISalesByTime {
  name: number; // Assuming this is a number based on provided data
  unit: number;
  value: string;
}

export interface IPaymentType {
  name: string | null; // null is allowed for some entries
  unit: number;
  value: string;
}

interface SalesPhase {
  name: string;
  value: number;
  percentage: string;
}

interface Phases {
  pre_sale: SalesPhase;
  early_bird: SalesPhase;
  general: SalesPhase;
  last_minute: SalesPhase;
}

interface DigitalSale {
  name: string;
  unit: number;
  value: string;
  percentage: string;
}

interface PhysicalSales {
  name: string;
  unit: number;
  value: string;
  percentage: string;
}

export interface ISalesSummary {
  name: string;
  type: string;
  percentage: string;
  capacity: number;
  sold: number;
  available: number;
  revenue: string;
}

export interface DashboardSalesHighlights {
  currency: string;
  total_sales: number;
  total_costs: number;
  total_revenue: number;
  total_clearing: number;
  sales_by: {
    locations: ISalesByLocation[];
    product: ISalesByProduct[];
    time: ISalesByTime[];
    payment_type: IPaymentType[];
    phases: Phases;
  };
  digital_sale: DigitalSale;
  physical_sales: PhysicalSales;
  top_performing_shops: any[]; // Assuming this is an empty array
  top_promo_codes: any[]; // Assuming this is an empty array
  sales_summary: ISalesSummary[];
}

// Define the root response type
export interface FetchDashboardSalesHighlightsResponse {
  message: string;
  success: boolean;
  data: DashboardSalesHighlights;
}
