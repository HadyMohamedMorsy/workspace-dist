"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LIST_TYPE_DISCOUNT_AR = exports.LIST_TYPE_DISCOUNT_EN = void 0;
const create_general_offer_dto_1 = require("../../../../../general-offer/dto/create-general-offer.dto");
exports.LIST_TYPE_DISCOUNT_EN = [
    { value: null, label: "All" },
    { value: create_general_offer_dto_1.DiscountType.PERCENTAGE, label: create_general_offer_dto_1.DiscountType.PERCENTAGE },
    { value: create_general_offer_dto_1.DiscountType.AMOUNT, label: create_general_offer_dto_1.DiscountType.AMOUNT },
];
exports.LIST_TYPE_DISCOUNT_AR = [
    { value: null, label: "الكل" },
    { value: create_general_offer_dto_1.DiscountType.PERCENTAGE, label: "نسبه مئويه" },
    { value: create_general_offer_dto_1.DiscountType.AMOUNT, label: "خصم ثابت" },
];
//# sourceMappingURL=type-discount.js.map