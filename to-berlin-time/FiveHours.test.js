const {toBerlinFiveHoursRow} = require('./FiveHours')

describe("Test Conversion to Berlin Five Minutes Row", () => {
    test('Test for 00:00:00', () => {
        const result = toBerlinFiveHoursRow('00:00:00')
        expect(result).toBe('OOOO');
    });
    test('Test for 23:59:59', () => {
        const result = toBerlinFiveHoursRow('23:59:59')
        expect(result).toBe('RRRR');
    });
    test('Test for 02:04:00', () => {
        const result = toBerlinFiveHoursRow('02:04:00')
        expect(result).toBe('OOOO');
    });
    test('Test for 08:23:00', () => {
        const result = toBerlinFiveHoursRow('08:23:00')
        expect(result).toBe('ROOO');
    });
    test('Test for 16:35:00', () => {
        const result = toBerlinFiveHoursRow('16:35:00')
        expect(result).toBe('RRRO');
    });
})
