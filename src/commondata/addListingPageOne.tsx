export interface IOptionProps {
  [key: string]: string;
  value: string;
  label: string;
  isDisabled?: any;
}
export interface IProductDataProps {
  title: string;
  value:
    | "productCategory"
    | "productFormat"
    | "productType"
    | "productAllocation"
    | "selectionOption"
    | "bookingMode";
  options: IOptionProps[];
  isTextBox?: boolean;
}
export const listingType: IOptionProps[] = [
  { value: "Event", label: "Event" },
  { value: "Restaurant", label: "Restaurant" },
  { value: "Experience", label: "Experience" },
  { value: "Transportation", label: "Transportation" },
  { value: "Product", label: "Product" },
  { value: "Service", label: "Service" },
];

export const listingCategory: IOptionProps[] = [
  { value: "Performing Art", label: "Performing Art" },
  { value: "Music", label: "Music" },
  { value: "Sports", label: "Sports" },
  { value: "Exhibition", label: "Exhibition" },
  { value: "Leisure", label: "Leisure" },
  { value: "Tourism", label: "Tourism" },
  { value: "Transportation", label: "Transportation" },
  { value: "Fashion", label: "Fashion" },
];
export const listingSubCategory: IOptionProps[] = [
  { value: "Arena Show", label: "Arena Show " },
];
export const listingAgeLimit: IOptionProps[] = [
  { value: "General", label: "General (All Ages)" },
  { value: "PG", label: "PG (Parental Guidance)" },
  { value: "+15", label: "+15" },
  { value: "+18", label: "+18" },
];
export const listingSuitability: IOptionProps[] = [
  { value: "Families", label: "Families " },
  { value: "Kids", label: "Kids " },
  { value: "Grown Ups", label: "Grown Ups " },
  { value: "Teenagers", label: "Teenagers " },
  { value: "Elders", label: "Elders " },
  { value: "Special Needs", label: "Special Needs " },
];

export const productData: IProductDataProps[] = [
  {
    title: "Product Type",
    value: "productType",
    options: [
      {
        value: "Allocated Seat",
        label: "Allocated Seat",
      },
      {
        value: "General Admission",
        label: "General Admission",
      },
      {
        value: "VIP",
        label: "VIP",
      },
    ],
  },
  {
    title: "Product Format",
    value: "productFormat",
    options: [
      {
        value: "Theater",
        label: "Theater",
      },
      {
        value: "Ticket",
        label: "Ticket",
      },
    ],
  },
  {
    title: "Product Category",
    value: "productCategory",
    isTextBox: true,
    options: [],
  },
  {
    title: "Product Allocation",
    value: "productAllocation",
    options: [
      {
        value: "Reserved Allocation",
        label: "Reserved Allocation",
      },
      {
        value: "Open Allocation",
        label: "Open Allocation",
      },
      {
        value: "Priority Allocation",
        label: "Priority Allocation",
      },
    ],
  },
  {
    title: "Booking Mode",
    value: "bookingMode",
    options: [
      {
        value: "Reservation Hold",
        label: "Reservation Hold",
      },
      {
        value: "Booking Confirmation",
        label: "Booking Confirmation",
      },
    ],
  },
  {
    title: "Selection Option",
    value: "selectionOption",
    options: [
      {
        value: "Automated & Manual Selection",
        label: "Automated & Manual Selection",
      },
      {
        value: "Manual Selection Only",
        label: "Manual Selection Only",
      },
      {
        value: "Automated Selection Only",
        label: "Automated Selection Only",
      },
    ],
  },
];
export const scanUserType: IOptionProps[] = [
  { value: "testevent123", label: "testevent123" },
  { value: "arcadiamus", label: "arcadiamus" },
  { value: "arcadiamus1", label: "arcadiamus1" },
  { value: "arcadiamus2", label: "arcadiamus2" },
  { value: "arcadiamus3", label: "arcadiamus3" },
  { value: "arcadiamus4", label: "arcadiamus4" },
];
