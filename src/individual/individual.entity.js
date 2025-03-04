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
exports.Individual = void 0;
const assignes_general_offer_entity_1 = require("../assignes-global-offers/assignes-general-offer.entity");
const assignes_membership_entity_1 = require("../assignes-memberships/assignes-membership.entity");
const assignes_packages_entity_1 = require("../assigness-packages-offers/assignes-packages.entity");
const deals_entity_1 = require("../deals/deals.entity");
const order_entity_1 = require("../orders/order.entity");
const deskarea_entity_1 = require("../reservations/deskarea/deskarea.entity");
const reservation_room_entity_1 = require("../reservations/rooms/reservation-room.entity");
const shared_entity_1 = require("../reservations/shared/shared.entity");
const user_entity_1 = require("../users/user.entity");
const typeorm_1 = require("typeorm");
let Individual = class Individual {
};
exports.Individual = Individual;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Individual.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 256 }),
    __metadata("design:type", String)
], Individual.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, length: 11 }),
    __metadata("design:type", String)
], Individual.prototype, "number", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, nullable: true }),
    __metadata("design:type", String)
], Individual.prototype, "whatsApp", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "freelancer" }),
    __metadata("design:type", String)
], Individual.prototype, "individual_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Individual.prototype, "employed_job", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Individual.prototype, "freelancer_job", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Individual.prototype, "unviresty", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Individual.prototype, "college", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => deals_entity_1.Deals, deals => deals.individual),
    __metadata("design:type", deals_entity_1.Deals)
], Individual.prototype, "deals", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_entity_1.Order, order => order.individual),
    __metadata("design:type", order_entity_1.Order)
], Individual.prototype, "orders", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => assignes_general_offer_entity_1.AssignGeneralOffer, assignGeneralOffer => assignGeneralOffer.individual),
    __metadata("design:type", Array)
], Individual.prototype, "assignGeneralOffers", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => assignes_membership_entity_1.AssignesMembership, AssignesMembership => AssignesMembership.individual),
    __metadata("design:type", Array)
], Individual.prototype, "assign_memberships", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => assignes_packages_entity_1.AssignesPackages, assignesPackages => assignesPackages.individual),
    __metadata("design:type", Array)
], Individual.prototype, "assignesPackages", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => shared_entity_1.Shared, shared => shared.individual),
    __metadata("design:type", Array)
], Individual.prototype, "shared", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => deskarea_entity_1.Deskarea, deskarea => deskarea.individual),
    __metadata("design:type", Array)
], Individual.prototype, "deskarea", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => reservation_room_entity_1.ReservationRoom, reservationRoom => reservationRoom.individual),
    __metadata("design:type", Array)
], Individual.prototype, "reservationRooms", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.createdByIndividual, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", user_entity_1.User)
], Individual.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], Individual.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP",
        onUpdate: "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], Individual.prototype, "updated_at", void 0);
exports.Individual = Individual = __decorate([
    (0, typeorm_1.Entity)()
], Individual);
//# sourceMappingURL=individual.entity.js.map