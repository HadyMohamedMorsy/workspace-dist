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
exports.Deals = void 0;
const assignes_general_offer_entity_1 = require("../assignes-global-offers/assignes-general-offer.entity");
const company_entity_1 = require("../companies/company.entity");
const individual_entity_1 = require("../individual/individual.entity");
const reservation_room_entity_1 = require("../reservations/rooms/reservation-room.entity");
const room_entity_1 = require("../rooms/room.entity");
const global_enum_1 = require("../shared/enum/global-enum");
const StudentActivity_entity_1 = require("../student-activity/StudentActivity.entity");
const user_entity_1 = require("../users/user.entity");
const typeorm_1 = require("typeorm");
let Deals = class Deals {
};
exports.Deals = Deals;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Deals.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: global_enum_1.ReservationStatus, nullable: true }),
    __metadata("design:type", String)
], Deals.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: global_enum_1.TypeUser,
    }),
    __metadata("design:type", String)
], Deals.prototype, "type_user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Deals.prototype, "hours", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamp", nullable: true }),
    __metadata("design:type", Date)
], Deals.prototype, "start_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamp", nullable: true }),
    __metadata("design:type", Date)
], Deals.prototype, "end_date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Deals.prototype, "price_hour", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Deals.prototype, "total_price", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Deals.prototype, "used", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Deals.prototype, "total_used", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Deals.prototype, "remaining", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => room_entity_1.Room, room => room.deal_room, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", room_entity_1.Room)
], Deals.prototype, "room", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => individual_entity_1.Individual, individual => individual.deals, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", individual_entity_1.Individual)
], Deals.prototype, "individual", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => company_entity_1.Company, company => company.deals, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", company_entity_1.Company)
], Deals.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => StudentActivity_entity_1.StudentActivity, studentActivity => studentActivity.deals, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", StudentActivity_entity_1.StudentActivity)
], Deals.prototype, "studentActivity", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => reservation_room_entity_1.ReservationRoom, reservationRoom => reservationRoom.deals),
    __metadata("design:type", reservation_room_entity_1.ReservationRoom)
], Deals.prototype, "reservationRooms", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => assignes_general_offer_entity_1.AssignGeneralOffer, assignGeneralOffer => assignGeneralOffer.deals, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", assignes_general_offer_entity_1.AssignGeneralOffer)
], Deals.prototype, "assignGeneralOffer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.createdByDeal, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", user_entity_1.User)
], Deals.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], Deals.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP",
        onUpdate: "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], Deals.prototype, "updated_at", void 0);
exports.Deals = Deals = __decorate([
    (0, typeorm_1.Entity)()
], Deals);
//# sourceMappingURL=deals.entity.js.map