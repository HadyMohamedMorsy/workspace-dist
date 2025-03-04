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
exports.ExpensePlace = void 0;
const typeorm_1 = require("typeorm");
const expense_place_child_entity_1 = require("./expenses-place-child/expense-place-child.entity");
let ExpensePlace = class ExpensePlace {
};
exports.ExpensePlace = ExpensePlace;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ExpensePlace.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], ExpensePlace.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], ExpensePlace.prototype, "total", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => expense_place_child_entity_1.ExpensePlaceChild, expense => expense.expensePlace),
    __metadata("design:type", Array)
], ExpensePlace.prototype, "expensePlaceChild", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], ExpensePlace.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP",
        onUpdate: "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], ExpensePlace.prototype, "updated_at", void 0);
exports.ExpensePlace = ExpensePlace = __decorate([
    (0, typeorm_1.Entity)()
], ExpensePlace);
//# sourceMappingURL=expense-place.entity.js.map