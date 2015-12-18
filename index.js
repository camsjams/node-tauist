var oneHourInSeconds = 60 * 60;
var oneDayInSeconds = oneHourInSeconds * 24;
var timeInSeconds = {
    halfMinute: 30,
    oneMinute: 60,
    fiveMinutes: 60 * 5,
    tenMinutes: 60 * 10,
    thirtyMinutes: 60 * 30,
    oneHour: oneHourInSeconds,
    twoHours: oneHourInSeconds * 2,
    threeHours: oneHourInSeconds * 3,
    fourHours: oneHourInSeconds * 4,
    fiveHours: oneHourInSeconds * 5,
    sixHours: oneHourInSeconds * 6,
    oneDay: oneDayInSeconds,
    twoDays: oneDayInSeconds * 2,
    sevenDays: oneDayInSeconds * 7,
    thirtyDays: oneDayInSeconds * 30,
    sixMonths: oneDayInSeconds * 30 * 6
};
var toMs = 1000;

module.exports = {
    s: timeInSeconds,
    ms: {
        halfMinute: timeInSeconds.halfMinute * toMs,
        oneMinute: timeInSeconds.oneMinute * toMs,
        fiveMinutes: timeInSeconds.fiveMinutes * toMs,
        tenMinutes: timeInSeconds.tenMinutes * toMs,
        thirtyMinutes: timeInSeconds.thirtyMinutes * toMs,
        oneHour: timeInSeconds.oneHour * toMs,
        twoHours: timeInSeconds.twoHours * toMs,
        threeHours: timeInSeconds.threeHours * toMs,
        fourHours: timeInSeconds.fourHours * toMs,
        fiveHours: timeInSeconds.fiveHours * toMs,
        sixHours: timeInSeconds.sixHours * toMs,
        oneDay: timeInSeconds.oneDay * toMs,
        twoDays: timeInSeconds.twoDays * toMs,
        sevenDays: timeInSeconds.sevenDays * toMs,
        thirtyDays: timeInSeconds.thirtyDays * toMs,
        sixMonths: timeInSeconds.sixMonths * toMs
    }
};