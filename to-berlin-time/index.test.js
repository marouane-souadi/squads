const {toBerlinTime} = require('./index')

describe("Test Conversion to Berlin Time", () => {
    test('Test for 00:00:00', () => {
        const result = toBerlinTime('00:00:00')
        expect(result).toBe('YOOOOOOOOOOOOOOOOOOOOOOO');
    });
    test('Test for 23:59:59', () => {
        const result = toBerlinTime('23:59:59')
        expect(result).toBe('ORRRRRRROYYRYYRYYRYYYYYY');
    });
    test('Test for 16:50:06', () => {
        const result = toBerlinTime('16:50:06')
        expect(result).toBe('YRRROROOOYYRYYRYYRYOOOOO');
    });
    test('Test for 11:37:01', () => {
        const result = toBerlinTime('11:37:01')
        expect(result).toBe('ORROOROOOYYRYYRYOOOOYYOO');
    });
})
