const {toBerlinFiveMinutesRow} = require('./FiveMinutes')

describe("Test Conversion to Berlin Five Minutes Row", () => {
    test('Test for 00:00:00', () => {
        const result = toBerlinFiveMinutesRow('00:00:00')
        expect(result).toBe('OOOOOOOOOOO');
    });
    test('Test for 23:59:59', () => {
        const result = toBerlinFiveMinutesRow('23:59:59')
        expect(result).toBe('YYRYYRYYRYY');
    });
    test('Test for 12:04:00', () => {
        const result = toBerlinFiveMinutesRow('12:04:00')
        expect(result).toBe('OOOOOOOOOOO');
    });
    test('Test for 12:23:00', () => {
        const result = toBerlinFiveMinutesRow('12:23:00')
        expect(result).toBe('YYRYOOOOOOO');
    });
    test('Test for 12:35:00', () => {
        const result = toBerlinFiveMinutesRow('12:35:00')
        expect(result).toBe('YYRYYRYOOOO');
    });
})
