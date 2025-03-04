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
exports.ReservationRoom = void 0;
const class_validator_1 = require("class-validator");
const assignes_general_offer_entity_1 = require("../../assignes-global-offers/assignes-general-offer.entity");
const assignes_packages_entity_1 = require("../../assigness-packages-offers/assignes-packages.entity");
const company_entity_1 = require("../../companies/company.entity");
const deals_entity_1 = require("../../deals/deals.entity");
const individual_entity_1 = require("../../individual/individual.entity");
const room_entity_1 = require("../../rooms/room.entity");
const global_enum_1 = require("../../shared/enum/global-enum");
const StudentActivity_entity_1 = require("../../student-activity/StudentActivity.entity");
const user_entity_1 = require("../../users/user.entity");
const typeorm_1 = require("typeorm");
let ReservationRoom = class ReservationRoom {
};
exports.ReservationRoom = ReservationRoom;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ReservationRoom.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ReservationRoom.prototype, "selected_day", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: global_enum_1.ReservationStatus }),
    __metadata("design:type", String)
], ReservationRoom.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ReservationRoom.prototype, "start_hour", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ReservationRoom.prototype, "start_minute", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: global_enum_1.TimeOfDay }),
    (0, class_validator_1.IsEnum)(global_enum_1.TimeOfDay),
    __metadata("design:type", String)
], ReservationRoom.prototype, "start_time", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ReservationRoom.prototype, "end_hour", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ReservationRoom.prototype, "end_minute", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: global_enum_1.TimeOfDay }),
    (0, class_validator_1.IsEnum)(global_enum_1.TimeOfDay),
    __metadata("design:type", String)
], ReservationRoom.prototype, "end_time", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => individual_entity_1.Individual, individual => individual.reservationRooms, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", individual_entity_1.Individual)
], ReservationRoom.prototype, "individual", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => company_entity_1.Company, company => company.reservationRooms, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", company_entity_1.Company)
], ReservationRoom.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => StudentActivity_entity_1.StudentActivity, studentActivity => studentActivity.reservationRooms, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", StudentActivity_entity_1.StudentActivity)
], ReservationRoom.prototype, "studentActivity", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => assignes_packages_entity_1.AssignesPackages, assignesPackages => assignesPackages.reservationRooms, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", assignes_packages_entity_1.AssignesPackages)
], ReservationRoom.prototype, "assignesPackages", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => deals_entity_1.Deals, deals => deals.reservationRooms, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", deals_entity_1.Deals)
], ReservationRoom.prototype, "deals", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => assignes_general_offer_entity_1.AssignGeneralOffer, assignGeneralOffer => assignGeneralOffer.reservationRooms, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", Array)
], ReservationRoom.prototype, "assignGeneralOffer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => room_entity_1.Room, room => room.reservationRoom, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", room_entity_1.Room)
], ReservationRoom.prototype, "room", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], ReservationRoom.prototype, "total_price", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], ReservationRoom.prototype, "total_time", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ReservationRoom.prototype, "note", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.createdByReservationRoom, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", user_entity_1.User)
], ReservationRoom.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], ReservationRoom.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ReservationRoom.prototype, "updated_at", void 0);
exports.ReservationRoom = ReservationRoom = __decorate([
    (0, typeorm_1.Entity)()
], ReservationRoom);
//# sourceMappingURL=reservation-room.entity.js.map