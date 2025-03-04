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
exports.AssignesMembership = void 0;
const assignes_general_offer_entity_1 = require("../assignes-global-offers/assignes-general-offer.entity");
const company_entity_1 = require("../companies/company.entity");
const individual_entity_1 = require("../individual/individual.entity");
const offer_co_working_space_entity_1 = require("../offer-co-working-space/offer-co-working-space.entity");
const deskarea_entity_1 = require("../reservations/deskarea/deskarea.entity");
const global_enum_1 = require("../shared/enum/global-enum");
const StudentActivity_entity_1 = require("../student-activity/StudentActivity.entity");
const user_entity_1 = require("../users/user.entity");
const typeorm_1 = require("typeorm");
let AssignesMembership = class AssignesMembership {
};
exports.AssignesMembership = AssignesMembership;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AssignesMembership.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: global_enum_1.ReservationStatus }),
    __metadata("design:type", String)
], AssignesMembership.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => individual_entity_1.Individual, individual => individual.assign_memberships, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", individual_entity_1.Individual)
], AssignesMembership.prototype, "individual", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => company_entity_1.Company, company => company.assign_memberships, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", company_entity_1.Company)
], AssignesMembership.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => StudentActivity_entity_1.StudentActivity, studentActivity => studentActivity.assign_memberships, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", StudentActivity_entity_1.StudentActivity)
], AssignesMembership.prototype, "studentActivity", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => offer_co_working_space_entity_1.CoWorkingSpace, coWorkingSpace => coWorkingSpace.assignessMemebership, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", offer_co_working_space_entity_1.CoWorkingSpace)
], AssignesMembership.prototype, "memeberShip", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => deskarea_entity_1.Deskarea, deskarea => deskarea.assignessMemebership),
    __metadata("design:type", Array)
], AssignesMembership.prototype, "deskarea", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => deskarea_entity_1.Deskarea, shared => shared.assignessMemebership),
    __metadata("design:type", Array)
], AssignesMembership.prototype, "shared", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => assignes_general_offer_entity_1.AssignGeneralOffer, assignGeneralOffer => assignGeneralOffer.assignessMemebership, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", assignes_general_offer_entity_1.AssignGeneralOffer)
], AssignesMembership.prototype, "assignGeneralOffer", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamp", nullable: true }),
    __metadata("design:type", Date)
], AssignesMembership.prototype, "start_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamp", nullable: true }),
    __metadata("design:type", Date)
], AssignesMembership.prototype, "end_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], AssignesMembership.prototype, "used", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], AssignesMembership.prototype, "total_used", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], AssignesMembership.prototype, "remaining", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], AssignesMembership.prototype, "total_price", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], AssignesMembership.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.createdByMemebership, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", user_entity_1.User)
], AssignesMembership.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP",
        onUpdate: "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], AssignesMembership.prototype, "updated_at", void 0);
exports.AssignesMembership = AssignesMembership = __decorate([
    (0, typeorm_1.Entity)()
], AssignesMembership);
//# sourceMappingURL=assignes-membership.entity.js.map