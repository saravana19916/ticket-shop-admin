export interface IMonitoringProps {
  product: string;
  scanned: number;
  remaining: number;
  total: number;
  progress: number;
  status?: string;
}
