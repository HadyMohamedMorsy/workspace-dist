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
exports.PermissionsUser = exports.User = void 0;
const assignes_general_offer_entity_1 = require("../assignes-global-offers/assignes-general-offer.entity");
const assignes_membership_entity_1 = require("../assignes-memberships/assignes-membership.entity");
const assignes_packages_entity_1 = require("../assigness-packages-offers/assignes-packages.entity");
const company_entity_1 = require("../companies/company.entity");
const deals_entity_1 = require("../deals/deals.entity");
const expense_salaries_entity_1 = require("../expenses-salary/expense-salaries.entity");
const generalOffer_entity_1 = require("../general-offer/generalOffer.entity");
const individual_entity_1 = require("../individual/individual.entity");
const order_entity_1 = require("../orders/order.entity");
const deskarea_entity_1 = require("../reservations/deskarea/deskarea.entity");
const reservation_room_entity_1 = require("../reservations/rooms/reservation-room.entity");
const shared_entity_1 = require("../reservations/shared/shared.entity");
const global_enum_1 = require("../shared/enum/global-enum");
const StudentActivity_entity_1 = require("../student-activity/StudentActivity.entity");
const tasks_entity_1 = require("../tasks/tasks.entity");
const typeorm_1 = require("typeorm");
let User = class User {
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 96,
        nullable: true,
    }),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 96,
        nullable: true,
        name: "lastname",
    }),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 96,
        nullable: true,
    }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: global_enum_1.Role, default: global_enum_1.Role.OPERATION_MANAGER }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)("json", { nullable: true }),
    __metadata("design:type", Array)
], User.prototype, "permission", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, length: 11 }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 96,
        nullable: true,
        unique: true,
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 96,
        nullable: true,
    }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => tasks_entity_1.Task, task => task.user),
    __metadata("design:type", Array)
], User.prototype, "task", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => tasks_entity_1.Task, task => task.createdBy),
    __metadata("design:type", Array)
], User.prototype, "createdByTasks", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_entity_1.Order, order => order.employed),
    __metadata("design:type", Array)
], User.prototype, "orders", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => assignes_packages_entity_1.AssignesPackages, assignesPackages => assignesPackages.createdBy),
    __metadata("design:type", Array)
], User.prototype, "createdByPackages", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => assignes_general_offer_entity_1.AssignGeneralOffer, assignGeneralOffer => assignGeneralOffer.createdBy),
    __metadata("design:type", Array)
], User.prototype, "createdByGeneralOffer", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => assignes_membership_entity_1.AssignesMembership, assignesMembership => assignesMembership.createdBy),
    __metadata("design:type", Array)
], User.prototype, "createdByMemebership", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => deals_entity_1.Deals, deals => deals.createdBy),
    __metadata("design:type", Array)
], User.prototype, "createdByDeal", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_entity_1.Order, order => order.createdBy),
    __metadata("design:type", Array)
], User.prototype, "createdByOrder", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => StudentActivity_entity_1.StudentActivity, studentActivity => studentActivity.createdBy),
    __metadata("design:type", Array)
], User.prototype, "createdByStudentActivity", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => company_entity_1.Company, company => company.createdBy),
    __metadata("design:type", Array)
], User.prototype, "createdByCompany", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => individual_entity_1.Individual, individual => individual.createdBy),
    __metadata("design:type", Array)
], User.prototype, "createdByIndividual", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => shared_entity_1.Shared, shared => shared.createdBy),
    __metadata("design:type", Array)
], User.prototype, "createdByShared", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => generalOffer_entity_1.GeneralOffer, generalOffer => generalOffer.createdBy),
    __metadata("design:type", Array)
], User.prototype, "globalOffer", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => deskarea_entity_1.Deskarea, deskarea => deskarea.createdBy),
    __metadata("design:type", Array)
], User.prototype, "createdByDeskArea", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => reservation_room_entity_1.ReservationRoom, reservationRoom => reservationRoom.createdBy),
    __metadata("design:type", Array)
], User.prototype, "createdByReservationRoom", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => expense_salaries_entity_1.ExpenseSalaries, salary => salary.user),
    __metadata("design:type", Array)
], User.prototype, "salaries", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: global_enum_1.UserStatus, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], User.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP",
        onUpdate: "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], User.prototype, "updated_at", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)()
], User);
class PermissionsUser {
}
exports.PermissionsUser = PermissionsUser;
//# sourceMappingURL=user.entity.js.map