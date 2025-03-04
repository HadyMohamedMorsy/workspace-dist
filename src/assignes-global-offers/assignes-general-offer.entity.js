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
exports.AssignGeneralOffer = void 0;
const assignes_membership_entity_1 = require("../assignes-memberships/assignes-membership.entity");
const assignes_packages_entity_1 = require("../assigness-packages-offers/assignes-packages.entity");
const company_entity_1 = require("../companies/company.entity");
const deals_entity_1 = require("../deals/deals.entity");
const generalOffer_entity_1 = require("../general-offer/generalOffer.entity");
const individual_entity_1 = require("../individual/individual.entity");
const deskarea_entity_1 = require("../reservations/deskarea/deskarea.entity");
const reservation_room_entity_1 = require("../reservations/rooms/reservation-room.entity");
const shared_entity_1 = require("../reservations/shared/shared.entity");
const global_enum_1 = require("../shared/enum/global-enum");
const StudentActivity_entity_1 = require("../student-activity/StudentActivity.entity");
const user_entity_1 = require("../users/user.entity");
const typeorm_1 = require("typeorm");
let AssignGeneralOffer = class AssignGeneralOffer {
};
exports.AssignGeneralOffer = AssignGeneralOffer;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AssignGeneralOffer.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => individual_entity_1.Individual, individual => individual.assignGeneralOffers, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", individual_entity_1.Individual)
], AssignGeneralOffer.prototype, "individual", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => company_entity_1.Company, company => company.assignGeneralOffers, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", company_entity_1.Company)
], AssignGeneralOffer.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => StudentActivity_entity_1.StudentActivity, studentActivity => studentActivity.assignGeneralOffers, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", StudentActivity_entity_1.StudentActivity)
], AssignGeneralOffer.prototype, "studentActivity", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: global_enum_1.TypeUser,
    }),
    __metadata("design:type", String)
], AssignGeneralOffer.prototype, "type_user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => generalOffer_entity_1.GeneralOffer, generalOffer => generalOffer.assignessOffers, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", generalOffer_entity_1.GeneralOffer)
], AssignGeneralOffer.prototype, "generalOffer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.createdByGeneralOffer, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", user_entity_1.User)
], AssignGeneralOffer.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => shared_entity_1.Shared, shared => shared.assignGeneralOffer),
    __metadata("design:type", shared_entity_1.Shared)
], AssignGeneralOffer.prototype, "shared", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => deskarea_entity_1.Deskarea, deskarea => deskarea.assignGeneralOffer),
    __metadata("design:type", deskarea_entity_1.Deskarea)
], AssignGeneralOffer.prototype, "deskarea", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => reservation_room_entity_1.ReservationRoom, reservationRoom => reservationRoom.assignesPackages),
    __metadata("design:type", reservation_room_entity_1.ReservationRoom)
], AssignGeneralOffer.prototype, "reservationRooms", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => deals_entity_1.Deals, deal => deal.assignGeneralOffer),
    __metadata("design:type", deals_entity_1.Deals)
], AssignGeneralOffer.prototype, "deals", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => assignes_packages_entity_1.AssignesPackages, assignesPackages => assignesPackages.assignGeneralOffer),
    __metadata("design:type", assignes_packages_entity_1.AssignesPackages)
], AssignGeneralOffer.prototype, "assignesPackages", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => assignes_membership_entity_1.AssignesMembership, assignesMembership => assignesMembership.assignGeneralOffer),
    __metadata("design:type", assignes_membership_entity_1.AssignesMembership)
], AssignGeneralOffer.prototype, "assignessMemebership", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], AssignGeneralOffer.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP",
        onUpdate: "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], AssignGeneralOffer.prototype, "updated_at", void 0);
exports.AssignGeneralOffer = AssignGeneralOffer = __decorate([
    (0, typeorm_1.Entity)()
], AssignGeneralOffer);
//# sourceMappingURL=assignes-general-offer.entity.js.map