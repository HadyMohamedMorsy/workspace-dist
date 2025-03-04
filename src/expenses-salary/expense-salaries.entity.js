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
exports.ExpenseSalaries = void 0;
const global_enum_1 = require("../shared/enum/global-enum");
const user_entity_1 = require("../users/user.entity");
const typeorm_1 = require("typeorm");
let ExpenseSalaries = class ExpenseSalaries {
};
exports.ExpenseSalaries = ExpenseSalaries;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ExpenseSalaries.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], ExpenseSalaries.prototype, "cost", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: global_enum_1.TypeSallary.Internal }),
    __metadata("design:type", String)
], ExpenseSalaries.prototype, "type_sallary", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ExpenseSalaries.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ExpenseSalaries.prototype, "destination", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.salaries, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", user_entity_1.User)
], ExpenseSalaries.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], ExpenseSalaries.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP",
        onUpdate: "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], ExpenseSalaries.prototype, "updated_at", void 0);
exports.ExpenseSalaries = ExpenseSalaries = __decorate([
    (0, typeorm_1.Entity)()
], ExpenseSalaries);
//# sourceMappingURL=expense-salaries.entity.js.map