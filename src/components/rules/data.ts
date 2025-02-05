import { IRulesDetailsProps } from "./RulesList";

export const allRulesList: IRulesDetailsProps[] = [
  // Live rules
  {
    id: 1,
    rule: "No smoking allowed within the premises.",
    createdAt: new Date("2025-01-01T09:00:00").toISOString(),
    status: "live",
  },
  {
    id: 2,
    rule: "Mobile phones must be kept on silent mode.",
    createdAt: new Date("2025-01-03T14:30:00").toISOString(),
    status: "live",
  },
  // Draft rules
  {
    id: 3,
    rule: "No outside food or drinks permitted.",
    createdAt: new Date("2025-01-05T10:00:00").toISOString(),
    status: "draft",
  },
  {
    id: 4,
    rule: "All guests must present a valid ticket upon entry.",
    createdAt: new Date("2025-01-06T12:00:00").toISOString(),
    status: "draft",
  },
  // Offline rules
  {
    id: 5,
    rule: "Pets are not allowed inside the venue.",
    createdAt: new Date("2024-12-20T08:15:00").toISOString(),
    status: "offline",
  },
  {
    id: 6,
    rule: "Photography is prohibited during the performance.",
    createdAt: new Date("2024-12-22T16:45:00").toISOString(),
    status: "offline",
  },
];
