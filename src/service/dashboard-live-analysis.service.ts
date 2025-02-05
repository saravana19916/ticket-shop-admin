import apiClient from "./axiosConfig";

export const fetchDashboardLiveAnalysis = async (
  eventId: string | number
): Promise<LiveAnalysisResponse> => {
  if (!eventId) throw new Error("Event ID is required.");
  const response = await apiClient.get(`/dashboard-live-analysis/${eventId}`);
  return response.data as LiveAnalysisResponse;
};

export interface LiveAnalysisResponse {
  message: string;
  success: boolean;
  data: LiveAnalysisData;
}

export interface LiveAnalysisData {
  in_queue: number;
  store_visitor: number;
  pending_carts: number;
  reserved: number;
  sales: ISalesDetails;
  attended: ISalesDetails;
  absent: ISalesDetails;
  sales_summary: ILiveAnalyticsSalesSummary[];
}

export interface ISalesDetails {
  name: string;
  unit: number;
  percentage: string;
}

export interface ILiveAnalyticsSalesSummary {
  name: string;
  percentage: string;
  capacity: number;
  sold: number;
  reserved: number;
}
