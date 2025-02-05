// Types
export interface IShowDateAndTimeSectionProps {
  numberOfEventDays: number;
  numberOfEvents: number;
  date?: string[];
  eventDate: string | undefined;
  showTime: string | undefined;
  showDuration: string | undefined;
  intermissionDuration: string | undefined;
  doorOpen: string | undefined;
  eventEnd: string | undefined;
  id: number;
}

// Data
export const showDateAndTimeSectionData: IShowDateAndTimeSectionProps[] = [
  {
    id: 1,
    eventDate: "12-01-2023",
    showTime: "20:00",
    showDuration: "02:00",
    intermissionDuration: "00:30",
    doorOpen: "18:00",
    eventEnd: "23:00",
    numberOfEventDays: 5,
    numberOfEvents: 5,
  },
  {
    id: 2,
    eventDate: "12-01-2024",
    showTime: "20:00",
    showDuration: "02:00",
    intermissionDuration: "00:30",
    doorOpen: "18:00",
    eventEnd: "23:00",
    numberOfEventDays: 5,
    numberOfEvents: 5,
  },
  {
    id: 3,
    eventDate: "11-01-2024",
    showTime: "12:00",
    showDuration: "02:00",
    intermissionDuration: "00:30",
    doorOpen: "11:00",
    eventEnd: "03:00",
    numberOfEventDays: 5,
    numberOfEvents: 5,
  },
  {
    id: 4,
    eventDate: "11-01-2024",
    showTime: "12:00",
    showDuration: "02:00",
    intermissionDuration: "00:30",
    doorOpen: "11:00",
    eventEnd: "02:00",
    numberOfEventDays: 5,
    numberOfEvents: 5,
  },
];
