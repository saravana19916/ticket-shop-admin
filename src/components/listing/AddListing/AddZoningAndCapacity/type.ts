export interface IAddListingAddZoningAndCapacity {
  id?: number;
  zones: IAddListingAddZoningAndCapacityZones;
  zoneDesign: IAddListingAddZoningAndCapacityZoneDesign[];
  capacity: IAddListingAddZoningAndCapacityCapacitySection;
  seats: IAddListingAddZoningAndCapacitySeats;
}
export interface IAddListingAddZoningAndCapacityZones {
  zoneName: string;
  zoneFormat: string;
  zoneType: string;
  zoneSelection: string | undefined;
  zoneColor: string;
}
export interface IAddListingAddZoningAndCapacityZoneDesign {
  label: string | undefined;
  value: number | string | undefined;
}
export interface IAddListingAddZoningAndCapacityCapacitySection {
  totalCapacity: number | undefined;
  totalOnSale: number | undefined;
  blocked: number | undefined;
}
export interface IAddListingAddZoningAndCapacitySeats {
  rangeFrom: number | undefined;
  rangeUpTo: number | undefined;
  order: string | undefined;
  blockedSeats: (string | number)[] | undefined;
  connectedProducts: string[] | undefined;
}

export interface IAddListingAddZoningAndCapacityProductDetails {
  productType: string | undefined;
  productFormat: string | undefined;
  productCategory: string | undefined;
  bookingMode: string | undefined;
  selectionOption: string | undefined;
  productAllocation: string | undefined;
}
export interface IAddListingAddZoningAndCapacityAllocationDetails {
  zoning: IZoning;
  numbering: INumbering;
  capacity: ICapacity;
}

interface IZoning {
  zone: string | undefined;
  floor: string | undefined;
  section: string | undefined;
  wing: string | undefined;
  row: string | undefined;
}

interface INumbering {
  numberFrom: number | undefined;
  numberUntil: number | undefined;
  skipNumbers: (number | string)[] | undefined;
  blockNumbers: (number | string)[] | undefined;
}
interface ICapacity {
  totalCapacity: number | undefined;
  onSaleCapacity: number | undefined;
}
