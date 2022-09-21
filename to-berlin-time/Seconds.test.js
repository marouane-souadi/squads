const {toBerlinSecondsLamp} = require('./Seconds')

describe("Test Conversion to Berlin Seconds Lamp", () => {
    test('Test for 00:00:00', () => {
        const result = toBerlinSecondsLamp('00:00:00')
        expect(result).toBe('Y');
    });
    test('Test for 23:59:59', () => {
        const result = toBerlinSecondsLamp('23:59:59')
        expect(result).toBe('O');
    });
})
