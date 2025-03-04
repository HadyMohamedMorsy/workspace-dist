"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsAfter = IsAfter;
const class_validator_1 = require("class-validator");
const moment = require("moment");
function IsAfter(startDateProperty, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: "isAfter",
            target: object.constructor,
            propertyName: propertyName,
            constraints: [startDateProperty],
            options: validationOptions,
            validator: {
                validate(value, args) {
                    const [startDateProperty] = args.constraints;
                    const startDateValue = args.object[startDateProperty];
                    const endDate = moment.utc(value);
                    const startDate = moment.utc(startDateValue);
                    if (!endDate.isValid() || !startDate.isValid()) {
                        return false;
                    }
                    return endDate.isAfter(startDate);
                },
                defaultMessage(args) {
                    return `"${args.property}" must be after "${args.constraints[0]}"`;
                },
            },
        });
    };
}
//# sourceMappingURL=validate-time-reservation.validation.js.map