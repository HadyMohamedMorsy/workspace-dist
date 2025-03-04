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
exports.OrderItemDto = exports.Order = void 0;
const company_entity_1 = require("../companies/company.entity");
const individual_entity_1 = require("../individual/individual.entity");
const global_enum_1 = require("../shared/enum/global-enum");
const StudentActivity_entity_1 = require("../student-activity/StudentActivity.entity");
const user_entity_1 = require("../users/user.entity");
const typeorm_1 = require("typeorm");
let Order = class Order {
};
exports.Order = Order;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Order.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "order_number", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: global_enum_1.TypeOrder,
    }),
    __metadata("design:type", String)
], Order.prototype, "type_order", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: global_enum_1.TypeUser,
    }),
    __metadata("design:type", String)
], Order.prototype, "type_user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => individual_entity_1.Individual, individual => individual.orders, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", individual_entity_1.Individual)
], Order.prototype, "individual", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => company_entity_1.Company, company => company.orders, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", company_entity_1.Company)
], Order.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => StudentActivity_entity_1.StudentActivity, studentActivity => studentActivity.orders, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", StudentActivity_entity_1.StudentActivity)
], Order.prototype, "studentActivity", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, users => users.orders, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", user_entity_1.User)
], Order.prototype, "employed", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Order.prototype, "order_price", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Order.prototype, "total_order", void 0);
__decorate([
    (0, typeorm_1.Column)("json", { nullable: true }),
    __metadata("design:type", Array)
], Order.prototype, "order_items", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.createdByOrder, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", user_entity_1.User)
], Order.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], Order.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP",
        onUpdate: "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], Order.prototype, "updated_at", void 0);
exports.Order = Order = __decorate([
    (0, typeorm_1.Entity)()
], Order);
class OrderItemDto {
}
exports.OrderItemDto = OrderItemDto;
//# sourceMappingURL=order.entity.js.map