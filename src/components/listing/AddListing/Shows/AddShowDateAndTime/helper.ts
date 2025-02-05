import * as Yup from "yup";

//TYPE
export interface IAddShowDateTimeProps {
  numberOfEventDays: number;
  numberOfEvents: number;
  date: string[];
  eventDate: string | undefined;
  showTime: string | undefined;
  showDuration: string | undefined;
  intermissionDuration: string | undefined;
  doorOpen: string | undefined;
  id?: number;
  eventEnd: string | undefined;
}

// INITIAL VALUE

export const addShowDateTimeInitialValues: IAddShowDateTimeProps = {
  numberOfEventDays: 0,
  numberOfEvents: 0,
  date: [],
  eventDate: undefined,
  showTime: undefined,
  showDuration: undefined,
  intermissionDuration: undefined,
  doorOpen: undefined,
  eventEnd: undefined,
};

//VALIDATION SCHEMA

const timeFormatRegex = /^([0-1]\d|2[0-3]):([0-5]\d)$/;

export const addShowDateTimeValidationSchema = Yup.object().shape({
  numberOfEventDays: Yup.number().nullable().min(0, "Must be positive"),
  numberOfEvents: Yup.number().nullable().min(0, "Must be positive"),
  eventDate: Yup.string().required("Required").nullable(),
  showTime: Yup.string().required("Required").nullable(),
  showDuration: Yup.string()
    .required("Required")
    .matches(timeFormatRegex, "Must be in hh:mm format")
    .nullable()
    .test(
      "is-valid-duration",
      "Show duration must be greater than intermission duration",
      function (value) {
        const { intermissionDuration } = this.parent;
        if (!value || !intermissionDuration) return true; // Skip validation if either value is not provided

        // Convert hh:mm to minutes
        const [showHours, showMinutes] = value.split(":").map(Number);
        const [intermissionHours, intermissionMinutes] = intermissionDuration
          .split(":")
          .map(Number);

        const showDurationInMinutes = showHours * 60 + showMinutes;
        const intermissionDurationInMinutes =
          intermissionHours * 60 + intermissionMinutes;

        return showDurationInMinutes > intermissionDurationInMinutes;
      }
    ),
  intermissionDuration: Yup.string()
    .required("Required")
    .matches(timeFormatRegex, "Must be in hh:mm format")
    .nullable()
    .test(
      "is-valid-intermission",
      "Intermission duration must be less than show duration",
      function (value) {
        const { showDuration } = this.parent;
        if (!value || !showDuration) return true; // Skip validation if either value is not provided

        // Convert hh:mm to minutes
        const [showHours, showMinutes] = showDuration.split(":").map(Number);
        const [intermissionHours, intermissionMinutes] = value
          .split(":")
          .map(Number);

        const showDurationInMinutes = showHours * 60 + showMinutes;
        const intermissionDurationInMinutes =
          intermissionHours * 60 + intermissionMinutes;

        return intermissionDurationInMinutes < showDurationInMinutes;
      }
    ),
  doorOpen: Yup.string().required("Required").nullable(),
  eventEnd: Yup.string().required("Required").nullable(),
});
