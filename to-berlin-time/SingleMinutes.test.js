const {toBerlinSingleMinutesRow} = require('./SingleMinutes')

describe("Test Conversion to Berlin Single Minutes Row", () => {
    test('Test for 00:00:00', () => {
        const result = toBerlinSingleMinutesRow('00:00:00')
        expect(result).toBe('OOOO');
    });
    test('Test for 23:59:59', () => {
        const result = toBerlinSingleMinutesRow('23:59:59')
        expect(result).toBe('YYYY');
    });
    test('Test for 12:32:00', () => {
        const result = toBerlinSingleMinutesRow('12:32:00')
        expect(result).toBe('YYOO');
    });
    test('Test for 12:34:00', () => {
        const result = toBerlinSingleMinutesRow('12:34:00')
        expect(result).toBe('YYYY');
    });
    test('Test for 12:35:00', () => {
        const result = toBerlinSingleMinutesRow('12:35:00')
        expect(result).toBe('OOOO');
    });
})
