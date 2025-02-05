export interface IPromotionsDiscountCampaigns {
  type: string;
  campaignsName: string;
  startDate: string; // UTC string
  expiryDate: string; // UTC string
  discount: number; // percentage
  discountValue: string;
  numberOfCodes: number;
  unit: string;
  application: string;
  usagePerCode: string; // unlimited or limited number
  organization: string;
  issuedBy: string;
  emailAddress: string;
  sources: string; // Generated or imported
  codesAndUsage: {
    code: string;
    status: string;
    timesUsed: string;
  }[];
}
