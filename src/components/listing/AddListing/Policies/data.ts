import { IPoliciesDetailsProps } from "./PoliciesLists";

export const allPoliciesList: IPoliciesDetailsProps[] = [
  // Live policies
  {
    id: 1,
    policyName: "Privacy Policy",
    toBeVisibleOn: "Event Page",
    policyText:
      "We are committed to protecting your personal information and privacy.",
    createdAt: new Date("2025-01-01").toISOString(),
    status: "live",
  },
  {
    id: 2,
    policyName: "Cookie Policy",
    toBeVisibleOn: "Event Page",
    policyText:
      "This site uses cookies to enhance user experience and analyze traffic.",
    createdAt: new Date("2025-01-04").toISOString(),
    status: "live",
  },
  // Draft policies
  {
    id: 3,
    policyName: "Terms and Conditions",
    toBeVisibleOn: "Digital Ticket",
    policyText:
      "By using this application, you agree to the following terms and conditions.",
    createdAt: new Date("2025-01-02").toISOString(),
    status: "draft",
  },
  {
    id: 4,
    policyName: "User Agreement",
    toBeVisibleOn: "Event Page",
    policyText:
      "All users must adhere to the guidelines provided in this agreement.",
    createdAt: new Date("2025-01-05").toISOString(),
    status: "draft",
  },
  // Offline policies
  {
    id: 5,
    policyName: "Refund Policy",
    toBeVisibleOn: "E-commerce Platform",
    policyText:
      "Refunds will be processed within 7 business days upon approval.",
    createdAt: new Date("2025-01-03").toISOString(),
    status: "offline",
  },
  {
    id: 6,
    policyName: "Shipping Policy",
    toBeVisibleOn: "E-commerce Platform",
    policyText:
      "We aim to deliver your order within the estimated delivery timeframe.",
    createdAt: new Date("2025-01-06").toISOString(),
    status: "offline",
  },
];
