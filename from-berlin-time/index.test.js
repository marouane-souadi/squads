const {fromBerlinTime} = require('./index')

describe("Test Conversion to Berlin Time", () => {
    test('Test for 00:00:00', () => {
        const result = fromBerlinTime('YOOOOOOOOOOOOOOOOOOOOOOO')
        expect(result).toBe('00:00:00');
    });
    test('Test for 23:59:59', () => {
        const result = fromBerlinTime('ORRRRRRROYYRYYRYYRYYYYYY')
        expect(result).toBe('23:59:01');
    });
    test('Test for 16:50:06', () => {
        const result = fromBerlinTime('YRRROROOOYYRYYRYYRYOOOOO')
        expect(result).toBe('16:50:00');
    });
    test('Test for 11:37:01', () => {
        const result = fromBerlinTime('ORROOROOOYYRYYRYOOOOYYOO')
        expect(result).toBe('11:37:01');
    });
})
