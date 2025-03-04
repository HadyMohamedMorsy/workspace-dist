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
exports.holder = exports.Company = void 0;
const assignes_general_offer_entity_1 = require("../assignes-global-offers/assignes-general-offer.entity");
const assignes_membership_entity_1 = require("../assignes-memberships/assignes-membership.entity");
const assignes_packages_entity_1 = require("../assigness-packages-offers/assignes-packages.entity");
const deals_entity_1 = require("../deals/deals.entity");
const order_entity_1 = require("../orders/order.entity");
const deskarea_entity_1 = require("../reservations/deskarea/deskarea.entity");
const reservation_room_entity_1 = require("../reservations/rooms/reservation-room.entity");
const shared_entity_1 = require("../reservations/shared/shared.entity");
const global_enum_1 = require("../shared/enum/global-enum");
const user_entity_1 = require("../users/user.entity");
const typeorm_1 = require("typeorm");
let Company = class Company {
};
exports.Company = Company;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Company.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 256 }),
    __metadata("design:type", String)
], Company.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, length: 11 }),
    __metadata("design:type", String)
], Company.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 256 }),
    __metadata("design:type", String)
], Company.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: global_enum_1.CompanyType,
        default: global_enum_1.CompanyType.GENERAL,
    }),
    __metadata("design:type", String)
], Company.prototype, "company_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, name: "whatsapp" }),
    __metadata("design:type", String)
], Company.prototype, "whatsApp", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "facebook", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "website", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "instagram", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "linkedin", void 0);
__decorate([
    (0, typeorm_1.Column)("json", { nullable: true }),
    __metadata("design:type", Array)
], Company.prototype, "holders", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => deals_entity_1.Deals, deals => deals.company),
    __metadata("design:type", Array)
], Company.prototype, "deals", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_entity_1.Order, order => order.company),
    __metadata("design:type", Array)
], Company.prototype, "orders", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => assignes_general_offer_entity_1.AssignGeneralOffer, assignGeneralOffer => assignGeneralOffer.company),
    __metadata("design:type", Array)
], Company.prototype, "assignGeneralOffers", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => assignes_membership_entity_1.AssignesMembership, AssignesMembership => AssignesMembership.company),
    __metadata("design:type", Array)
], Company.prototype, "assign_memberships", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => assignes_packages_entity_1.AssignesPackages, assignesPackages => assignesPackages.studentActivity),
    __metadata("design:type", Array)
], Company.prototype, "assignesPackages", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => shared_entity_1.Shared, shared => shared.company),
    __metadata("design:type", Array)
], Company.prototype, "shared", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => deskarea_entity_1.Deskarea, deskarea => deskarea.company),
    __metadata("design:type", Array)
], Company.prototype, "deskarea", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => reservation_room_entity_1.ReservationRoom, reservationRoom => reservationRoom.company),
    __metadata("design:type", Array)
], Company.prototype, "reservationRooms", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.createdByCompany, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", user_entity_1.User)
], Company.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], Company.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP",
        onUpdate: "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], Company.prototype, "updated_at", void 0);
exports.Company = Company = __decorate([
    (0, typeorm_1.Entity)()
], Company);
class holder {
}
exports.holder = holder;
//# sourceMappingURL=company.entity.js.map