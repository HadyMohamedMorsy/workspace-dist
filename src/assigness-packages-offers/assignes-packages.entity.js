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
exports.AssignesPackages = void 0;
const assignes_general_offer_entity_1 = require("../assignes-global-offers/assignes-general-offer.entity");
const company_entity_1 = require("../companies/company.entity");
const individual_entity_1 = require("../individual/individual.entity");
const offer_package_entity_1 = require("../offer-packages/offer-package.entity");
const reservation_room_entity_1 = require("../reservations/rooms/reservation-room.entity");
const global_enum_1 = require("../shared/enum/global-enum");
const StudentActivity_entity_1 = require("../student-activity/StudentActivity.entity");
const user_entity_1 = require("../users/user.entity");
const typeorm_1 = require("typeorm");
let AssignesPackages = class AssignesPackages {
};
exports.AssignesPackages = AssignesPackages;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AssignesPackages.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: global_enum_1.ReservationStatus }),
    __metadata("design:type", String)
], AssignesPackages.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => individual_entity_1.Individual, individual => individual.assignesPackages, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", individual_entity_1.Individual)
], AssignesPackages.prototype, "individual", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => company_entity_1.Company, company => company.assignesPackages, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", company_entity_1.Company)
], AssignesPackages.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => StudentActivity_entity_1.StudentActivity, studentActivity => studentActivity.assignesPackages, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", StudentActivity_entity_1.StudentActivity)
], AssignesPackages.prototype, "studentActivity", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => offer_package_entity_1.OfferPackages, offerPackages => offerPackages.assignesPackages, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", offer_package_entity_1.OfferPackages)
], AssignesPackages.prototype, "packages", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => reservation_room_entity_1.ReservationRoom, reservationRoom => reservationRoom.assignesPackages),
    __metadata("design:type", reservation_room_entity_1.ReservationRoom)
], AssignesPackages.prototype, "reservationRooms", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => assignes_general_offer_entity_1.AssignGeneralOffer, assignGeneralOffer => assignGeneralOffer.assignesPackages, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", assignes_general_offer_entity_1.AssignGeneralOffer)
], AssignesPackages.prototype, "assignGeneralOffer", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamp", nullable: true }),
    __metadata("design:type", Date)
], AssignesPackages.prototype, "start_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamp", nullable: true }),
    __metadata("design:type", Date)
], AssignesPackages.prototype, "end_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], AssignesPackages.prototype, "used", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], AssignesPackages.prototype, "total_used", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], AssignesPackages.prototype, "remaining", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], AssignesPackages.prototype, "total_price", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.createdByPackages, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", user_entity_1.User)
], AssignesPackages.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], AssignesPackages.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP",
        onUpdate: "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], AssignesPackages.prototype, "updated_at", void 0);
exports.AssignesPackages = AssignesPackages = __decorate([
    (0, typeorm_1.Entity)()
], AssignesPackages);
//# sourceMappingURL=assignes-packages.entity.js.map