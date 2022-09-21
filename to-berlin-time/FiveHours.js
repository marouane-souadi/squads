const toBerlinFiveHoursRow = (time) => {
    const hours = parseInt(time.split(':')[0])
    switch (Math.trunc(hours / 5)) {
        case 0: return 'OOOO'
        case 1: return 'ROOO'
        case 2: return 'RROO'
        case 3: return 'RRRO'
        case 4: return 'RRRR'
    }
}

module.exports = {
    toBerlinFiveHoursRow,
}