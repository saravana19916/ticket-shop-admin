export interface IPoliciesTableDataProps {
  id: number;
  policyName: string;
  policiesList: string[];
}

export const policiesTableData: IPoliciesTableDataProps[] = [
  {
    id: 1,
    policyName: "Refund Policy",
    policiesList: [
      "Refunds are issued within 14 days of the original purchase, provided the item is returned in its original condition.",
      "Refunds are issued within 14 days of the original purchase, provided the item is returned in its original condition.",
      "Refunds are issued within 14 days of the original purchase, provided the item is returned in its original condition.",
    ],
  },
  {
    id: 2,
    policyName: "Exchange Policy",
    policiesList: [
      "Exchanges are accepted within 30 days of purchase with the original receipt and the item in new condition.",
      "Exchanges are accepted within 30 days of purchase with the original receipt and the item in new condition.",
      "Exchanges are accepted within 30 days of purchase with the original receipt and the item in new condition.",
    ],
  },
  {
    id: 3,
    policyName: "No Show Policy",
    policiesList: [
      "No-shows for scheduled appointments or events will not be eligible for refunds or rescheduling.",
      "No-shows for scheduled appointments or events will not be eligible for refunds or rescheduling.",
      "No-shows for scheduled appointments or events will not be eligible for refunds or rescheduling.",
      "No-shows for scheduled appointments or events will not be eligible for refunds or rescheduling.",
      "No-shows for scheduled appointments or events will not be eligible for refunds or rescheduling.",
    ],
  },
  {
    id: 4,
    policyName: "Return Policy",
    policiesList: [
      "Items can be returned within 30 days of receipt for a full refund or store credit.",
      "Items can be returned within 30 days of receipt for a full refund or store credit.",
      "Items can be returned within 30 days of receipt for a full refund or store credit.",
    ],
  },
];
