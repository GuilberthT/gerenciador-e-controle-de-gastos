import dayjs from "dayjs"
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)

export function formatMonth(date: string | Date) {
  return dayjs(date, "DD/MM/YYYY").month() + 1;
}
