"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpensesSalariesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_module_1 = require("./../users/users.module");
const expense_salaries_controller_1 = require("./expense-salaries.controller");
const expense_salaries_entity_1 = require("./expense-salaries.entity");
const expense_salaries_service_1 = require("./expense-salaries.service");
let ExpensesSalariesModule = class ExpensesSalariesModule {
};
exports.ExpensesSalariesModule = ExpensesSalariesModule;
exports.ExpensesSalariesModule = ExpensesSalariesModule = __decorate([
    (0, common_1.Module)({
        imports: [users_module_1.UsersModule, typeorm_1.TypeOrmModule.forFeature([expense_salaries_entity_1.ExpenseSalaries])],
        controllers: [expense_salaries_controller_1.ExpensesSalariesController],
        providers: [expense_salaries_service_1.ExpensesSalariesService],
        exports: [expense_salaries_service_1.ExpensesSalariesService],
    })
], ExpensesSalariesModule);
//# sourceMappingURL=expense-salaries.module.js.map