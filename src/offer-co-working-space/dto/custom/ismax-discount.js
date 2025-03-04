"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsMaxDiscount = IsMaxDiscount;
const class_validator_1 = require("class-validator");
function IsMaxDiscount(typeDiscountProperty, maxValue, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: "isMaxDiscount",
            target: object.constructor,
            propertyName: propertyName,
            constraints: [typeDiscountProperty, maxValue],
            options: validationOptions,
            validator: {
                validate(value, args) {
                    const [typeDiscountProperty, maxValue] = args.constraints;
                    const typeDiscount = args.object[typeDiscountProperty];
                    if (typeDiscount === "percentage" && value > maxValue) {
                        return false;
                    }
                    return true;
                },
                defaultMessage(args) {
                    return `For a "percentage" discount type, the discount cannot be greater than ${args.constraints[1]}`;
                },
            },
        });
    };
}
//# sourceMappingURL=ismax-discount.js.map