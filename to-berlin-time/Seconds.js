const toBerlinSecondsLamp = (time) => {
    const seconds = parseInt(time.split(':')[2])
    switch (seconds % 2) {
        case 0: return 'Y'
        case 1: return 'O'
    }
}

module.exports = {
    toBerlinSecondsLamp,
}