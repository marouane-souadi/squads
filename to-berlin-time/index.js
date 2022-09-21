const {toBerlinFiveMinutesRow} = require('./FiveMinutes')
const {toBerlinSingleMinutesRow} = require('./SingleMinutes')
const {toBerlinSingleHoursRow} = require('./SingleHours')
const {toBerlinFiveHoursRow} = require('./FiveHours')
const {toBerlinSecondsLamp} = require('./Seconds')

const toBerlinTime = (time) => {
    return toBerlinSecondsLamp(time) + toBerlinFiveHoursRow(time) + toBerlinSingleHoursRow(time) + toBerlinFiveMinutesRow(time) + toBerlinSingleMinutesRow(time)
}

module.exports = {
    toBerlinTime,
}