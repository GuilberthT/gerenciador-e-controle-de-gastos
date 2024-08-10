import dayjs from "dayjs"
import customParseFormat from 'dayjs/plugin/customParseFormat.js'

dayjs.extend(customParseFormat)

export function formatMonth(date: string) {
  return dayjs(date, "DD/MM/YYYY").month() + 1;
}
