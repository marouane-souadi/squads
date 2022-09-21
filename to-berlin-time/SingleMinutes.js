const toBerlinSingleMinutesRow = (time) => {
    const minutes = parseInt(time.split(':')[1])
    switch (minutes % 5) {
        case 0: return 'OOOO'
        case 1: return 'YOOO'
        case 2: return 'YYOO'
        case 3: return 'YYYO'
        case 4: return 'YYYY'
    }
}

module.exports = {
    toBerlinSingleMinutesRow,
}