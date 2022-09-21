const {fromBerlinTime} = require('./from-berlin-time')
const {toBerlinTime} = require('./to-berlin-time')

// To berlin time conversion example
const time = '23:59:59'
console.log(`Berlin time from digital time ${time} is: ${toBerlinTime(time)}`)

console.log('')

// From berlin time conversion example
const berlinTime = 'YRRROROOOYYRYYRYYRYOOOOO'
console.log(`Digital time from berlin time ${berlinTime} is: ${fromBerlinTime(berlinTime)}`)