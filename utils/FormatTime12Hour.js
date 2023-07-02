// Prepend any date. Use your birthday.
const convertTime12to24 = (timeString) => {
    const x = new Date('1970-01-01T' + timeString + 'Z')
        .toLocaleTimeString('en-US',
            { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' }
        );
    return x;
}

export default convertTime12to24;