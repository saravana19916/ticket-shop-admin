export interface ITicketsProps {
  id?: number | string;
  productName: string;
  templateName: string;
  ticketCategories: string;
  type: "PDF Ticket" | "Mobile Ticket" | "Physical Ticket";
  status: "draft" | "live";
}

export const ticketsList: ITicketsProps[] = [
  // PDF Tickets
  {
    id: 1,
    productName: "Concert Pass",
    templateName: "Classic Template",
    ticketCategories: "VIP",
    type: "PDF Ticket",
    status: "draft",
  },
  {
    id: 2,
    productName: "Festival Entry",
    templateName: "Modern Template",
    ticketCategories: "General",
    type: "PDF Ticket",
    status: "live",
  },
  {
    id: 3,
    productName: "Theater Show",
    templateName: "Elegant Template",
    ticketCategories: "Premium",
    type: "PDF Ticket",
    status: "draft",
  },

  // Mobile Tickets
  {
    id: 4,
    productName: "Sports Event",
    templateName: "Digital Template",
    ticketCategories: "Standard",
    type: "Mobile Ticket",
    status: "live",
  },
  {
    id: 5,
    productName: "Movie Screening",
    templateName: "Compact Template",
    ticketCategories: "Student",
    type: "Mobile Ticket",
    status: "draft",
  },
  {
    id: 6,
    productName: "Music Fest",
    templateName: "QR Code Template",
    ticketCategories: "Early Bird",
    type: "Mobile Ticket",
    status: "live",
  },
  {
    id: 7,
    productName: "Comedy Show",
    templateName: "Simple Template",
    ticketCategories: "Regular",
    type: "Mobile Ticket",
    status: "draft",
  },

  // Physical Tickets
  {
    id: 8,
    productName: "Opera Night",
    templateName: "Printed Gold",
    ticketCategories: "VIP",
    type: "Physical Ticket",
    status: "draft",
  },
  {
    id: 9,
    productName: "Football Match",
    templateName: "Standard Print",
    ticketCategories: "Fan Zone",
    type: "Physical Ticket",
    status: "draft",
  },
  {
    id: 10,
    productName: "Carnival Access",
    templateName: "Holographic Design",
    ticketCategories: "All Access",
    type: "Physical Ticket",
    status: "live",
  },
  {
    id: 11,
    productName: "Broadway Show",
    templateName: "Exclusive Edition",
    ticketCategories: "Premium",
    type: "Physical Ticket",
    status: "live",
  },
];
