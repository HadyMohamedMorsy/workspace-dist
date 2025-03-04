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
exports.GeneralOffer = void 0;
const assignes_general_offer_entity_1 = require("../assignes-global-offers/assignes-general-offer.entity");
const global_enum_1 = require("../shared/enum/global-enum");
const user_entity_1 = require("../users/user.entity");
const typeorm_1 = require("typeorm");
const create_general_offer_dto_1 = require("./dto/create-general-offer.dto");
let GeneralOffer = class GeneralOffer {
};
exports.GeneralOffer = GeneralOffer;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], GeneralOffer.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], GeneralOffer.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => assignes_general_offer_entity_1.AssignGeneralOffer, assignGeneralOffer => assignGeneralOffer.generalOffer),
    __metadata("design:type", assignes_general_offer_entity_1.AssignGeneralOffer)
], GeneralOffer.prototype, "assignessOffers", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamp", nullable: true }),
    __metadata("design:type", Date)
], GeneralOffer.prototype, "start_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamp", nullable: true }),
    __metadata("design:type", Date)
], GeneralOffer.prototype, "end_date", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: create_general_offer_dto_1.DiscountType,
        default: create_general_offer_dto_1.DiscountType.AMOUNT,
    }),
    __metadata("design:type", String)
], GeneralOffer.prototype, "type_discount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], GeneralOffer.prototype, "discount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: global_enum_1.PRODUCT_TYPE, default: global_enum_1.PRODUCT_TYPE.Room }),
    __metadata("design:type", String)
], GeneralOffer.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.globalOffer, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", user_entity_1.User)
], GeneralOffer.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], GeneralOffer.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP",
        onUpdate: "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], GeneralOffer.prototype, "updated_at", void 0);
exports.GeneralOffer = GeneralOffer = __decorate([
    (0, typeorm_1.Entity)()
], GeneralOffer);
//# sourceMappingURL=generalOffer.entity.js.map