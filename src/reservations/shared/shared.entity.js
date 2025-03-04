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
exports.Shared = void 0;
const class_validator_1 = require("class-validator");
const assignes_general_offer_entity_1 = require("../../assignes-global-offers/assignes-general-offer.entity");
const assignes_membership_entity_1 = require("../../assignes-memberships/assignes-membership.entity");
const company_entity_1 = require("../../companies/company.entity");
const general_settings_entity_1 = require("../../general-settings/general-settings.entity");
const individual_entity_1 = require("../../individual/individual.entity");
const global_enum_1 = require("../../shared/enum/global-enum");
const StudentActivity_entity_1 = require("../../student-activity/StudentActivity.entity");
const user_entity_1 = require("../../users/user.entity");
const typeorm_1 = require("typeorm");
let Shared = class Shared {
};
exports.Shared = Shared;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Shared.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Shared.prototype, "selected_day", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Shared.prototype, "start_hour", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Shared.prototype, "start_minute", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: global_enum_1.TimeOfDay }),
    (0, class_validator_1.IsEnum)(global_enum_1.TimeOfDay),
    __metadata("design:type", String)
], Shared.prototype, "start_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Shared.prototype, "end_hour", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Shared.prototype, "end_minute", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: global_enum_1.ReservationStatus }),
    __metadata("design:type", String)
], Shared.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: global_enum_1.TimeOfDay, nullable: true }),
    (0, class_validator_1.IsEnum)(global_enum_1.TimeOfDay),
    __metadata("design:type", String)
], Shared.prototype, "end_time", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => individual_entity_1.Individual, individual => individual.shared, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", individual_entity_1.Individual)
], Shared.prototype, "individual", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => company_entity_1.Company, company => company.shared, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", company_entity_1.Company)
], Shared.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => StudentActivity_entity_1.StudentActivity, studentActivity => studentActivity.shared, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", StudentActivity_entity_1.StudentActivity)
], Shared.prototype, "studentActivity", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => assignes_membership_entity_1.AssignesMembership, assignesMembership => assignesMembership.shared, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", assignes_membership_entity_1.AssignesMembership)
], Shared.prototype, "assignessMemebership", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => general_settings_entity_1.GeneralSettings, settings => settings.shared, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", general_settings_entity_1.GeneralSettings)
], Shared.prototype, "settings", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => assignes_general_offer_entity_1.AssignGeneralOffer, assignGeneralOffer => assignGeneralOffer.shared, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", assignes_general_offer_entity_1.AssignGeneralOffer)
], Shared.prototype, "assignGeneralOffer", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Shared.prototype, "total_price", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Shared.prototype, "total_time", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Shared.prototype, "note", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.createdByShared, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", user_entity_1.User)
], Shared.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], Shared.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Shared.prototype, "updated_at", void 0);
exports.Shared = Shared = __decorate([
    (0, typeorm_1.Entity)()
], Shared);
//# sourceMappingURL=shared.entity.js.map