const fromBerlinTime = (berlinTime) => {

    const berlinSecondsLamp = berlinTime[0]
    const berlinFiveHoursRow = berlinTime.substr(1,4)
    const berlinSingleHoursRow = berlinTime.substr(5,4)
    const berlinFiveMinutesRow = berlinTime.substr(9,11)
    const berlinSingleMinuteRow = berlinTime.substr(20,4)

    // For seconds, we can't guess the seconds count, only if even or odd
    // For even we set seconds to 00, for odd we set it to 01
    const secondsStringDigits = berlinSecondsLamp === 'Y' ? '00' : '01'


    const fiveMinutesCount = berlinFiveMinutesRow.split('').filter(m => (m === 'Y' || m === 'R')).length
    const singleMinutesCount = berlinSingleMinuteRow.split('').filter(m => (m === 'Y')).length
    const minutes = (fiveMinutesCount * 5) + singleMinutesCount
    const minutesStringDigits = intToStringAsTwoDigits(minutes)

    const fiveHoursCount = berlinFiveHoursRow.split('').filter(h => h === 'R').length
    const singleHoursCount = berlinSingleHoursRow.split('').filter(h => h === 'R').length
    const hours = (fiveHoursCount * 5) + singleHoursCount
    const hoursStringDigits = intToStringAsTwoDigits(hours)


    return `${hoursStringDigits}:${minutesStringDigits}:${secondsStringDigits}`
}


const intToStringAsTwoDigits = (num) => {
    return `${Math.trunc(num/10)}${num % 10}`
}

module.exports = {
    fromBerlinTime
}