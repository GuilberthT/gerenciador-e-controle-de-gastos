const dayjs = require("dayjs")
const customParseFormat = require('dayjs/plugin/customParseFormat')

dayjs.extend(customParseFormat)

function formatMonth(date) {
    return dayjs(date, "DD/MM/YYYY").month() + 1
}

module.exports = { formatMonth }
