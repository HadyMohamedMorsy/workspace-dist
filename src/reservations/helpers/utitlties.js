"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertTo24HourDate = convertTo24HourDate;
exports.calculateTimeDifferenceInHours = calculateTimeDifferenceInHours;
exports.formatDate = formatDate;
exports.diffrentHour = diffrentHour;
exports.calculateHours = calculateHours;
const moment = require("moment");
function convertTo24HourDate(hour, minute, period) {
    const currentDate = new Date();
    let hour24 = hour;
    if (period === "pm" && hour < 12)
        hour24 += 12;
    if (period === "am" && hour === 12)
        hour24 = 0;
    currentDate.setHours(hour24, minute, 0, 0);
    return currentDate;
}
function calculateTimeDifferenceInHours(startDate, endDate) {
    const diffInMillis = endDate.getTime() - startDate.getTime();
    return Math.abs(Math.round(diffInMillis / (1000 * 60 * 60)));
}
function formatDate(date) {
    return moment(date).format("DD/MM/YYYY");
}
function diffrentHour(rest) {
    return calculateHours({
        start_hour: rest.start_hour,
        start_minute: rest.start_minute,
        start_time: rest.start_time,
        end_hour: rest.end_hour,
        end_minute: rest.end_minute,
        end_time: rest.end_time,
    });
}
function calculateHours(details) {
    const start = convertTo24HourDate(details.start_hour, details.start_minute, details.start_time);
    const end = convertTo24HourDate(details.end_hour, details.end_minute, details.end_time);
    const diffMs = Math.abs(end.getTime() - start.getTime());
    const totalMinutes = Math.floor(diffMs / (1000 * 60));
    const hours = Math.floor(totalMinutes / 60);
    const remainingMinutes = totalMinutes % 60;
    return remainingMinutes > 10 ? hours + 1 : hours;
}
//# sourceMappingURL=utitlties.js.map