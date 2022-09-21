const {toBerlinSingleHoursRow} = require('./SingleHours')

describe("Test Conversion to Berlin Single Hours Row", () => {
    test('Test for 00:00:00', () => {
        const result = toBerlinSingleHoursRow('00:00:00')
        expect(result).toBe('OOOO');
    });
    test('Test for 23:59:59', () => {
        const result = toBerlinSingleHoursRow('23:59:59')
        expect(result).toBe('RRRO');
    });
    test('Test for 02:04:00', () => {
        const result = toBerlinSingleHoursRow('12:32:00')
        expect(result).toBe('RROO');
    });
    test('Test for 08:23:00', () => {
        const result = toBerlinSingleHoursRow('08:23:00')
        expect(result).toBe('RRRO');
    });
    test('Test for 14:35:00', () => {
        const result = toBerlinSingleHoursRow('14:35:00')
        expect(result).toBe('RRRR');
    });
})
