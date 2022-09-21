# Conversion between Berlin Clock to Digital clock
## Install
- install node.js
- in the project folder run the following command
```npn install```

## Run Tests
Tests are implemented using jest
```shell
npm test
```
## Usage
- Convert digital time to berlin time
```javascript
const {toBerlinTime} = require('./to-berlin-time')

const time = '23:59:59'

console.log(toBerlinTime(time))
```
- To convert a berlin time to digital time
```javascript
const {fromBerlinTime} = require('./from-berlin-time')

const berlinTime = 'YRRROROOOYYRYYRYYRYOOOOO'

console.log(fromBerlinTime(berlinTime))
```
