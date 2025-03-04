"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGeneralOfferDto = exports.DiscountType = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const global_enum_1 = require("../../shared/enum/global-enum");
const validate_time_reservation_validation_1 = require("../../shared/validations/validate-time-reservation.validation");
const ismax_discount_1 = require("./custom/ismax-discount");
var DiscountType;
(function (DiscountType) {
    DiscountType["PERCENTAGE"] = "percentage";
    DiscountType["AMOUNT"] = "amount";
})(DiscountType || (exports.DiscountType = DiscountType = {}));
class CreateGeneralOfferDto {
}
exports.CreateGeneralOfferDto = CreateGeneralOfferDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateGeneralOfferDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(global_enum_1.PRODUCT_TYPE, {
        message: "produce must be one of the following: shared, deskarea, Room",
    }),
    __metadata("design:type", String)
], CreateGeneralOfferDto.prototype, "product", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Object)
], CreateGeneralOfferDto.prototype, "start_date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, validate_time_reservation_validation_1.IsAfter)("start_date"),
    __metadata("design:type", String)
], CreateGeneralOfferDto.prototype, "end_date", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(DiscountType, { message: 'discount_type must be either "percentage" or "amount"' }),
    __metadata("design:type", String)
], CreateGeneralOfferDto.prototype, "type_discount", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, ismax_discount_1.IsMaxDiscount)("type_discount", 100, {
        message: 'If discount type is "percentage", discount must not exceed 100',
    }),
    __metadata("design:type", Number)
], CreateGeneralOfferDto.prototype, "discount", void 0);
//# sourceMappingURL=create-general-offer.dto.js.map