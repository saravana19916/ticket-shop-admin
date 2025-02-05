export interface IGuestList {
  orderId: string;
  unit: string;
  name: string;
  organization: string;
  date: string; //UTC string
  deliveryAddress: string; // email to deliver
  status: string; // issued, cancelled, used
  transactionSummary: {
    paymentMethod: string;
    totalValue: string; // eg: 100.00 this format
    promoCode: string;
    discount: number; // percentage
    grandTotal: string; // eg: 90.00 this format
    issuedBy: string;
  };
  orderDetails: {
    tickets: {
      quantity: number;
      costPerTicket: string; // 100.00 format
      name: string;
      totalCost: string; //100.00 format
    }[];
    processFee: string; //100.00 format
    serviceCharge: string; //100.00 format
    netTotal: string;
    discount: string;
    discountValue: string;
    discountType: string; // promo code
    vat: number; //percentage
    vatValue: string;
    grandTotal: string; // 100.00 format
  };
}

export interface ISingleGuestInvitationList {
  ticket: string;
  availability: string;
  availabilityPercentage: number;
  count: number;
  amount: number;
  ageLimit: string;
  inclusions: string[];
}
